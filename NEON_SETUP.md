# Neon Database Integration Setup

## Overview
Your application now stores form submissions in a Neon PostgreSQL database instead of external services like Google Forms.

## Database Schema

### 1. contact_submissions
Stores contact form submissions from `/contact` page
- `id`: Unique identifier
- `name`: User's full name
- `email`: User's email address
- `company`: User's company (optional)
- `subject`: Contact subject (general, partnership, expo, support)
- `message`: Contact message body
- `created_at`: Submission timestamp
- `ip_address`: IP address of submitter

### 2. seafood_expo_registrations
Stores seafood expo event registrations from `/seafood-expo/register`
- `id`: Unique identifier
- `company_name`: Company name
- `business_field`: Type of business
- `main_products`: Product descriptions
- `current_markets`: Markets currently serving
- `website`: Company website
- `contact_name`: Contact person name
- `position`: Job position
- `phone`: Phone number
- `email`: Email address
- `goals`: Participation goals
- `export_readiness`: Export capability status
- `interested_package`: Package selection (CORE, TRADE, MARKET ENTRY)
- `expected_timing`: Expected timeline
- `expectations`: Special expectations or questions
- `created_at`: Registration timestamp

### 3. furniture_roadshow_registrations
Stores furniture roadshow event registrations from `/global-furniture-business-roadshow/register`
- `id`: Unique identifier
- `full_name`: Full name
- `email`: Email address
- `phone`: Phone number
- `position`: Job title
- `company_name`: Company name
- `company_type`: Type of company
- `employees`: Number of employees
- `website`: Company website
- `tax_id`: Tax identification number
- `interests`: Interested areas (stored as comma-separated)
- `participation_type`: Type of participation
- `special_requests`: Special requests or questions
- `agree_terms`: Agreed to event terms
- `agree_marketing`: Opted in to marketing emails
- `created_at`: Registration timestamp

## API Endpoints

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": 123
}
```

### POST /api/seafood-expo/register
Submit seafood expo registration

**Request Body:**
```json
{
  "companyName": "string",
  "businessField": "string",
  "mainProducts": "string",
  "currentMarkets": "string",
  "website": "string",
  "contactName": "string",
  "position": "string",
  "phone": "string",
  "email": "string",
  "goals": "string",
  "exportReadiness": "string",
  "interestedPackage": "string",
  "expectedTiming": "string",
  "expectations": "string"
}
```

### POST /api/furniture-roadshow/register
Submit furniture roadshow registration

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "position": "string",
  "companyName": "string",
  "companyType": "string",
  "employees": "string",
  "website": "string",
  "taxId": "string",
  "interests": ["string"],
  "participationType": "string",
  "specialRequests": "string",
  "agreeTerms": true,
  "agreeMarketing": true
}
```

## Environment Variables

The following environment variable is automatically provided by the Neon integration:
- `DATABASE_URL`: PostgreSQL connection string to your Neon database

## Updated Files

1. **app/api/contact/route.ts** - New API endpoint for contact form
2. **app/api/seafood-expo/register/route.ts** - New API endpoint for seafood expo registration
3. **app/api/furniture-roadshow/register/route.ts** - New API endpoint for furniture roadshow registration
4. **app/contact/ContactContent.tsx** - Updated to submit to API instead of email
5. **app/seafood-expo/register/page.tsx** - Updated to submit to Neon database instead of Google Forms
6. **app/global-furniture-business-roadshow/register/page.tsx** - Updated to submit to Neon database

## Database Indexes

Indexes were created for faster queries:
- `idx_contact_submissions_email` - Query by email
- `idx_contact_submissions_created_at` - Sort by creation date
- `idx_seafood_expo_registrations_email` - Query by email
- `idx_seafood_expo_registrations_created_at` - Sort by creation date
- `idx_furniture_roadshow_registrations_email` - Query by email
- `idx_furniture_roadshow_registrations_created_at` - Sort by creation date

## Validation

All API endpoints include:
- Required field validation
- Email format validation
- Error handling with appropriate HTTP status codes
- IP address tracking for contact submissions

## Next Steps

1. Test the forms to ensure submissions are being saved
2. Create an admin dashboard to view submissions (optional)
3. Set up email notifications when forms are submitted (optional)
4. Back up your database regularly
5. Monitor database usage and performance

## Support

For issues with the Neon integration, check:
- Database URL is set correctly in environment variables
- All three API routes are deployed
- Form submissions are being sent to the correct API endpoints
