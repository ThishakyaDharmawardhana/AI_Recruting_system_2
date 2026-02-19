# AIcruiter - AI Recruiting System

## Prerequisites

- Node.js 18+
- A Supabase project (existing or new)
- OpenRouter API key
- Vapi public key

## 1) Install dependencies

```bash
npm install
```

## 2) Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in real values:

```bash
cp .env.local.example .env.local
```

Required values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENROUTER_API_KEY`
- `NEXT_PUBLIC_VAPI_PUBLIC_KEY`

## 3) Set up database schema in Supabase

In Supabase SQL Editor, run:

- `supabase/schema.sql`

This creates the required tables used by the app:

- `Users`
- `Interviews`
- `interview-feedback`

## 4) Run the project

```bash
npm run dev
```

Open:

- `http://localhost:3000`

## Notes

- You do **not** need a separate Supabase account for this project.
- You can reuse an existing Supabase project if you add the required tables and use its URL + anon key.
