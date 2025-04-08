# Aidra - AI Innovation Platform

## Overview
Aidra is a comprehensive AI innovation platform built with React, TypeScript, and Supabase, featuring:
- Modern, responsive UI with Tailwind CSS
- Authentication and authorization
- Internationalization (English/Arabic)
- Progressive Web App (PWA) support
- Help Center and API documentation
- Performance optimization and SEO

## Tech Stack
- Frontend: React 18, TypeScript, Vite
- Styling: Tailwind CSS
- Animation: Framer Motion
- Database: Supabase (PostgreSQL)
- Authentication: Supabase Auth
- State Management: React Context
- Icons: Lucide React
- Error Tracking: Sentry

## Prerequisites
- Node.js 18+
- npm 9+
- Supabase account

## Environment Setup
Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SENTRY_DSN=your_sentry_dsn
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/aidra.git
cd aidra
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Database Setup

1. Create a new Supabase project

2. Run the migration file in `supabase/migrations/`:
   - This will create all necessary tables with proper RLS policies
   - Sets up authentication
   - Creates required indexes

3. Configure authentication in Supabase dashboard:
   - Enable email/password sign-in
   - Disable email confirmation (optional)
   - Set up password policies

## Deployment

### Frontend Deployment (Netlify)

1. Connect your repository to Netlify

2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18+

3. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SENTRY_DSN`

4. Deploy:
   - Netlify will automatically build and deploy on push to main branch

### Security Considerations

1. Content Security Policy (CSP) is configured in:
   - `index.html`
   - `vite.config.ts`

2. Additional security headers:
   - X-Frame-Options
   - X-Content-Type-Options
   - Referrer-Policy
   - Permissions-Policy
   - HSTS

3. Database security:
   - Row Level Security (RLS) enabled on all tables
   - Proper policies for data access
   - Secure API key handling

## Project Structure

```
aidra/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── supabase/
│   └── migrations/     # Database migrations
└── package.json        # Dependencies and scripts
```

## Features

### Authentication
- Email/password authentication
- Protected routes
- Session management
- User metadata

### Internationalization
- English and Arabic support
- RTL support for Arabic
- Language switcher component

### Progressive Web App
- Offline support
- App manifest
- Service worker
- Cache management

### Performance
- Code splitting
- Image optimization
- Lazy loading
- Bundle optimization

## Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components
- Implement proper error handling
- Write meaningful comments
- Follow component composition patterns

### Testing
- Run tests: `npm run test`
- Coverage: `npm run test:coverage`

### Security
- Keep dependencies updated
- Follow security best practices
- Implement proper input validation
- Use secure authentication flows

## License
Copyright © 2025 Aidra Tech Inc. All rights reserved.