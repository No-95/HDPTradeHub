import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      fullName,
      email,
      phone,
      position,
      companyName,
      companyType,
      employees,
      website,
      taxId,
      interests,
      participationType,
      specialRequests,
      agreeTerms,
      agreeMarketing,
    } = body

    // Validate required fields
    if (!fullName || !email || !phone || !companyName) {
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

    // Must agree to terms
    if (!agreeTerms) {
      return NextResponse.json(
        { error: 'Must agree to event terms and conditions' },
        { status: 400 }
      )
    }

    // Insert into database
    const result = await sql`
      INSERT INTO furniture_roadshow_registrations 
      (full_name, email, phone, position, company_name, company_type, 
       employees, website, tax_id, interests, participation_type,
       special_requests, agree_terms, agree_marketing)
      VALUES 
      (${fullName}, ${email}, ${phone}, ${position || null}, 
       ${companyName}, ${companyType || null}, ${employees || null},
       ${website || null}, ${taxId || null}, 
       ${interests && Array.isArray(interests) ? interests.join(', ') : interests || null},
       ${participationType || null}, ${specialRequests || null},
       ${agreeTerms}, ${agreeMarketing})
      RETURNING id, created_at
    `

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully',
        id: result[0]?.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Furniture roadshow registration error:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}
