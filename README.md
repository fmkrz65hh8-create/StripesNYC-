# STRIPESNYC

STRIPESNYC is a football officiating platform designed for officials, assignors, and game-day crews.

The project goal is to help manage assignments, availability, crew communication, official profiles, and training resources through one connected system.

## Core Product

STRIPESNYC includes:

- Official Dashboard
- Assignor Dashboard
- CrewSync Live™
- Availability tracking
- Official profiles
- Training Library
- Game assignments
- Database planning
- Backend API

## Project Structure

```txt
STRIPESNYC
├── backend
├── database
├── frontend
├── LICENSE
└── README.md
```

## Frontend

The frontend contains the user-facing STRIPESNYC application.

Current frontend pages include:

- Home
- Official Dashboard
- Assignor Dashboard
- Availability
- CrewSync Live™
- Profile
- Training Library
- Backend API Status section

Tech stack:

- Next.js
- React
- TypeScript
- CSS

## Backend

The backend contains the API for STRIPESNYC.

Current API routes include:

- `GET /`
- `GET /api/health`
- `GET /api/officials`
- `GET /api/assignments`

Tech stack:

- Node.js
- Express
- CORS
- Dotenv

## Database

The database folder contains planning files for the STRIPESNYC data model.

Current database files:

- `schema.sql`
- `seed.sql`

Core database tables:

- `officials`
- `assignors`
- `games`
- `assignments`
- `availability`
- `crewsync_messages`

## MVP Focus

The first version of STRIPESNYC focuses on:

1. Official profiles
2. Availability submission
3. Game assignments
4. Crew communication
5. Assignor tools
6. Training resources
7. Backend API status visibility

## Local Development

To run STRIPESNYC locally, you will need Node.js installed on your computer.

### Run the Backend

Open a terminal and run:

```bash
cd backend
npm install
npm run dev
```

The backend will run at:

```txt
http://localhost:4000
```

Test backend routes:

```txt
http://localhost:4000/
http://localhost:4000/api/health
http://localhost:4000/api/officials
http://localhost:4000/api/assignments
```

### Run the Frontend

Open a second terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at:

```txt
http://localhost:3000
```

### Frontend to Backend Connection

The frontend API helper is located at:

```txt
frontend/lib/api.ts
```

The API status component is located at:

```txt
frontend/lib/components/ApiStatus.tsx
```

The Home page uses the API status component to check the backend health route:

```txt
GET /api/health
```

## Vision

STRIPESNYC is being built to support football officials with modern tools for coordination, communication, preparation, and assignment management.

CrewSync Live™ is the real-time communication layer for game-day updates, crew alerts, and operational coordination.