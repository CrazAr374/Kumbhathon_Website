# Kumbh Mela Admin Panel Setup

## Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

## Environment Variables
Create `.env.local` file with:
```
DATABASE_URL="postgresql://username:password@localhost:5432/kumbh_admin"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your_secure_password"
NODE_ENV="development"
```

**IMPORTANT:** 
- Change default credentials in production
- Keep `.env.local` file secure and never commit to version control
- The admin username and password are required for authentication

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Generate Prisma client:
```bash
npm run db:generate
```

3. Push database schema:
```bash
npm run db:push
```

4. Start development server:
```bash
npm run dev
```

## Admin Access
- URL: http://localhost:3000/admin/login
- Username: (value from ADMIN_USERNAME env var, default: "admin")
- Password: (value from ADMIN_PASSWORD env var)

**Security Features:**
- Session-based authentication with HTTP-only cookies
- Automatic redirect to login for unauthorized access
- Server-side authentication checks on protected pages
- Secure logout functionality that clears session
- Protected admin routes via middleware

## Production Deployment
1. Set environment variables on hosting platform
2. Run database migrations: `npm run db:push`
3. Build application: `npm run build`
4. Start production server: `npm start`

## Database Schema
- Volunteers table with UUID primary key
- Required fields: name, email, phone
- Optional fields: skills, availability
- Automatic timestamp tracking