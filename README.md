# UXBoost - UX Audit

A modern, neubrutalism-styled landing page for UX audit services with real-time Twitter integration.

## Features

- 🎨 Neubrutalism design with bold colors and shadows
- 📱 Fully responsive mobile-first design
- 🌙 Dark/light theme support
- 🐦 Real-time Twitter integration for testimonials
- 📊 Supabase backend for audit requests
- ⚡ Fast performance with Vite

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### 2. Twitter API Setup (Optional)

The app includes Twitter integration for real testimonials but works perfectly with fallback testimonials if Twitter API is not configured.

To enable Twitter integration:

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new app or use existing one
3. Generate a Bearer Token
4. Configure the Bearer Token in your Supabase Edge Functions (see step 3)

### 3. Supabase Setup

The project uses Supabase for:
- Storing audit requests
- Edge functions for Twitter API integration

Setup steps:
1. Set up your Supabase project
2. Run the database migrations
3. **Configure Twitter Bearer Token in Supabase Edge Functions:**
   - Go to your Supabase Dashboard
   - Navigate to Edge Functions
   - Select the `fetch-tweets` function
   - Add environment variable: `TWITTER_BEARER_TOKEN` with your Twitter API Bearer Token
   - **Note:** This is different from your local `.env` file - it must be configured in Supabase

### 4. Development

```bash
npm install
npm run dev
```

### 5. Deployment

If you want to enable Twitter integration in production:

1. Go to your Supabase Dashboard
2. Navigate to Edge Functions
3. Set the `TWITTER_BEARER_TOKEN` environment variable for the `fetch-tweets` function

**Important:** The app works perfectly without Twitter API configuration - it will automatically use high-quality fallback testimonials.

## Twitter Integration

The app attempts to fetch real tweets mentioning UXBoost or UX audits and displays them as testimonials. If the Twitter API is unavailable or not configured, it gracefully falls back to curated sample testimonials that showcase the value proposition effectively.

## Database Schema

The app uses a single table `audit_requests` with the following structure:
- User information (name, email, company)
- Project details (website, user type, goals)
- Plan selection and status tracking

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **API Integration**: Twitter API v2 (optional)
- **Deployment**: Netlify (frontend) + Supabase (backend)

## Troubleshooting

### Twitter Integration Issues

If you see console messages about Twitter API errors, this is normal behavior when the Twitter Bearer Token is not configured. The app will automatically use fallback testimonials which are designed to be just as effective for showcasing social proof.

To enable real Twitter integration:
1. Ensure you have a Twitter Developer account
2. Generate a Bearer Token
3. Add it to your Supabase Edge Functions environment variables (not your local `.env`)
4. The function name should be `fetch-tweets` and the variable name should be `TWITTER_BEARER_TOKEN`