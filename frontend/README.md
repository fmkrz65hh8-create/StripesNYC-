# STRIPESNYC Frontend

This folder will contain the user-facing web/mobile app for STRIPESNYC.

## Frontend Goals

STRIPESNYC will help football officials, assigners, and crews manage:

- Game assignments
- Crew availability
- Official profiles
- CrewSync Live™ communication
- Training resources
- Schedule updates
- Assignor/admin dashboards

## Planned Pages

- Home / Landing Page
- Login
- Official Dashboard
- Assignor Dashboard
- Crew Schedule
- CrewSync Live™
- Availability
- Profile
- Training Library

## Planned Tech Stack

- React or Next.js
- TypeScript
- Tailwind CSS
- API connection to backend
- Mobile-first design

## MVP Priority

The first version should focus on:

1. Official login
2. Availability submission
3. Game assignment display
4. Crew communication
5. Assignor dashboard
## API Connection

The frontend includes an API helper at:

```txt
lib/api.ts

## Vercel Deployment

The STRIPESNYC frontend is prepared for Vercel deployment.

### Vercel Settings

Use these settings on Vercel:

```txt
Framework Preset: Next.js
Root Directory: frontend
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

### Required Build Script

The frontend `package.json` includes:

```json
"build": "next build"
```

### Local Run

To run the frontend locally:

```bash
npm install
npm run dev
```

Local frontend URL:

```txt
http://localhost:3000
```

### Backend API Connection

The frontend API helper is located at:

```txt
lib/api.ts
```

The API status component is located at:

```txt
lib/components/ApiStatus.tsx
```

After the backend is deployed to Render, add this environment variable in Vercel:

```txt
NEXT_PUBLIC_API_BASE_URL=https://your-render-backend-url
```

Until that environment variable is added, the frontend falls back to:

```txt
http://localhost:4000
```