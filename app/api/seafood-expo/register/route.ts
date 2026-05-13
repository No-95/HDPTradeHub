import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      companyName,
      businessField,
      mainProducts,
      currentMarkets,
      website,
      contactName,
      position,
      phone,
      email,
      goals,
      exportReadiness,
      interestedPackage,
      expectedTiming,
      expectations,
    } = body

    // Validate required fields
    if (!companyName || !contactName || !phone || !email) {
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

    // Insert into database
    const result = await sql`
      INSERT INTO seafood_expo_registrations 
      (company_name, business_field, main_products, current_markets, website,
       contact_name, position, phone, email, goals, export_readiness,
       interested_package, expected_timing, expectations)
      VALUES 
      (${companyName}, ${businessField || null}, ${mainProducts || null}, 
       ${currentMarkets || null}, ${website || null}, ${contactName}, 
       ${position || null}, ${phone}, ${email}, ${goals || null}, 
       ${exportReadiness || null}, ${interestedPackage || null}, 
       ${expectedTiming || null}, ${expectations || null})
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
    console.error('[v0] Seafood expo registration error:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}
