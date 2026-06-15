# STRIPESNYC Backend

This folder contains the backend API for STRIPESNYC.

## Purpose

The backend will support:

- Officials
- Assignors
- Game assignments
- CrewSync Live™ communication
- Availability
- Profiles
- Training resources

## Current API Routes

- `GET /`
- `GET /api/health`
- `GET /api/officials`
- `GET /api/assignments`

## Tech Stack

- Node.js
- Express
- CORS
- Dotenv

## Run Locally

```bash
npm install
npm run dev

## Render Deployment

The STRIPESNYC backend is prepared for Render deployment.

### Render Settings

Use these settings on Render:

```txt
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

### Required Start Script

The backend `package.json` includes:

```json
"start": "node server.js"
```

### Port Configuration

The backend uses Render’s assigned port when deployed, and port `4000` locally:

```js
const PORT = process.env.PORT || 4000;
```

### Backend Routes

Current API routes:

```txt
GET /
GET /api/health
GET /api/officials
GET /api/assignments
```

### Local Run

To run the backend locally:

```bash
npm install
npm run dev
```

Local backend URL:

```txt
http://localhost:4000
```