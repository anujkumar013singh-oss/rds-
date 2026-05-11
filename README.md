# RDS Group — Full-Stack HR Services Website

React (Vite) + Express + MongoDB Atlas + Nodemailer single-page application.

---

## Project Structure

```
/
├── client/    ← React + Vite frontend (deploy to Vercel)
└── server/    ← Express backend (deploy to Render)
```

---

## Local Development

### 1. Backend

```bash
cd server
npm install

# Copy and fill in your values
cp .env.example .env

npm run dev
# Server runs at http://localhost:5000
# Test: curl http://localhost:5000/health
```

### 2. Frontend

```bash
cd client
npm install

cp .env.example .env
# .env already has VITE_API_URL=http://localhost:5000 for local dev

npm run dev
# App runs at http://localhost:5173
```

---

## Environment Variables

### Server (`server/.env`)

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `SMTP_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Use `587` for STARTTLS — **never 465 on Render** |
| `SMTP_SECURE` | `false` for STARTTLS (port 587) |
| `SMTP_USER` | Gmail address |
| `SMTP_PASS` | Gmail App Password (not your regular password) |
| `MAIL_TO` | Email address where inquiries are delivered |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed frontend origins |
| `PORT` | Server port (Render sets this automatically) |
| `NODE_ENV` | `production` in production |

### Client (`client/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Full backend URL — set in Vercel dashboard, not in code |

---

## Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Create a new App Password for "Mail" on "Other device"
4. Copy the 16-character password — this is your `SMTP_PASS`
5. Use port 587 with `SMTP_SECURE=false` (STARTTLS)

---

## MongoDB Atlas Setup

1. Create a free cluster at https://cloud.mongodb.com
2. Create a database user with read/write access
3. Whitelist `0.0.0.0/0` in Network Access (or Render's static IP)
4. Connection string format:
   ```
   mongodb+srv://<user>:<password>@<cluster>.mongodb.net/rdsgroup
   ```

---

## Deploying the Backend to Render

1. Push your code to GitHub
2. Create a new **Web Service** on Render
3. Connect your GitHub repo, set root directory to `server/`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add all environment variables from `server/.env.example`
7. Set `ALLOWED_ORIGINS` to include your Vercel URL + custom domain:
   ```
   https://rdsgroupp.in,https://www.rdsgroupp.in,https://rdsgroup.vercel.app,http://localhost:5173
   ```
8. Deploy — note your Render service URL (e.g. `https://rds-group-api.onrender.com`)

---

## Deploying the Frontend to Vercel

1. Create a new project on Vercel, connect your GitHub repo
2. Set root directory to `client/`
3. Add environment variable in Vercel dashboard:
   - `VITE_API_URL` = `https://your-render-service.onrender.com`
4. Deploy

---

## Adding a Custom Domain (CRITICAL)

> **After adding a custom domain on Vercel**, you MUST update the backend CORS whitelist:

1. Go to Render → your backend service → Environment
2. Update `ALLOWED_ORIGINS` to include the new domain:
   ```
   https://rdsgroupp.in,https://www.rdsgroupp.in,https://rdsgroup.vercel.app,http://localhost:5173
   ```
   Always add **both** `https://yourdomain.com` AND `https://www.yourdomain.com`
3. **Redeploy the Render service**
4. **Redeploy the Vercel frontend** (to pick up any env var changes)

> Skipping this step is the #1 cause of "works on Vercel URL but broken on real domain" bugs.

---

## Testing CORS Preflight

Open DevTools → Network tab → filter by "OPTIONS" method.

When the form is submitted, you should see a preflight OPTIONS request to `/api/contact` that returns `200` with the correct `Access-Control-Allow-Origin` header.

---

## Deployment Gotchas

| Issue | Fix |
|---|---|
| CORS error on custom domain | Update `ALLOWED_ORIGINS` on Render, redeploy both services |
| Render cold start (30–50s first request) | Expected — the frontend shows a warning after 8s |
| Email not sending | Use port 587, not 465. Use Gmail App Password, not regular password |
| Form works locally but not in production | Check `VITE_API_URL` is set in Vercel's Environment Variables |
| MongoDB connection refused | Whitelist `0.0.0.0/0` in Atlas Network Access |

---

## Replacing Placeholder Images

Search for these comments in the source code to replace placeholders with real images:

- `Hero.jsx` — `// Replace this block with real founder photo`
- `About.jsx` — `// Replace this block with real team photo`
- `About.jsx` — `// Replace with <img src="/team/founder-name.jpg" ...>`

Place real photos in `client/public/team/` and reference them as `/team/photo.jpg`.
