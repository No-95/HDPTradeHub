import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    const sql = neon(databaseUrl)
    const body = await request.json()

    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get client IP address
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    // Insert into database
    const result = await sql`
      INSERT INTO contact_submissions 
      (name, email, company, subject, message, ip_address)
      VALUES 
      (${name}, ${email}, ${company || null}, ${subject}, ${message}, ${ipAddress})
      RETURNING id, created_at
    `

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: result[0]?.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
