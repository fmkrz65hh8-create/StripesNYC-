# STRIPESNYC Deployment Guide

## Recommended Setup

Frontend: Vercel  
Backend: Render  
Database: Supabase later  
Source control: GitHub  

## Frontend Deployment

Folder:

```txt
frontend

Framework Preset: Next.js
Root Directory: frontend
Install Command: npm install
Build Command: npm run build
Output Directory: .next

NEXT_PUBLIC_API_BASE_URL=https://your-render-backend-url

backend

Root Directory: backend
Build Command: npm install
Start Command: npm start

Do **not** create `DEPLOYMENT.md` inside the backend folder. Create `DEPLOYMENT.md` at the **main/root level**, next to:

```txt
backend
database
frontend
LICENSE
README.md