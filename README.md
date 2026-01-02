# Kumbh Mela 2027 - Volunteer Management System

A professional, government-focused volunteer registration and management system for Kumbh Mela 2027.

## Features

### Public Volunteer Registration
- Clean, accessible registration form with 15 fields
- Balanced information collection across 6 sections:
  - Basic Details (Name, Mobile, Email)
  - Availability (Dates & Shift Preferences)
  - Skills & Preferences (Skills, Role, Languages)
  - Local Context (Nashik residency, Area)
  - Safety Information (Emergency contact, Medical conditions)
  - Consent & Agreement
- Real-time validation
- Mobile-responsive design
- Professional government-appropriate user interface

### Admin Panel
- Secure authentication system
- Searchable volunteer database
- Clean data table with filtering
- Professional olive green color scheme
- Minimal, performance-focused design
- Session-based access control
- Proper logout functionality

## Quick Start

### Prerequisites
- Node.js 18+
- Database (SQLite/PostgreSQL)
- npm or yarn

### Installation

1. Clone and install:
   ```bash
   cd kumbh-admin
   npm install
   ```

2. Setup environment:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local`:
   ```env
   DATABASE_URL="file:./dev.db"
   ADMIN_USERNAME="admin"
   ADMIN_PASSWORD="your_secure_password"
   NODE_ENV="development"
   ```

3. Initialize database:
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Application URLs

- Volunteer Registration: http://localhost:3000/volunteer
- Admin Login: http://localhost:3000/admin/login
- Admin Dashboard: http://localhost:3000/admin/dashboard

## Volunteer Form Fields

### Required Fields (12)
1. Full Name
2. Mobile Number
3. Email
4. Available From (Date)
5. Available To (Date)
6. Preferred Shift
7. Skills / Background
8. Preferred Role
9. Languages Known
10. Local Resident (Yes/No)
11. Consent Checkbox
12. (Dates count as 2 fields)

### Optional Fields (3)
1. Area (Locality)
2. Emergency Contact Name
3. Emergency Contact Number
4. Medical Condition

## Design Philosophy

- Color Scheme: Olive green (#2d3e2e) and earth tones
- No: Blue, purple, or gradients
- Focus: Performance and usability over visual effects
- Style: Professional, government-appropriate, accessible
- UX: Clean, intuitive, minimal friction

## Security Features

- Multi-layer authentication
- HTTP-only session cookies
- Server-side validation
- Protected routes via middleware
- Proper logout with session clearing
- Environment-based credentials

## Project Structure

```
kumbh-admin/
├── app/
│   ├── volunteer/        # Public registration form
│   ├── admin/            # Admin panel
│   │   ├── login/        # Admin login
│   │   └── dashboard/    # Volunteer management
│   └── api/
│       ├── volunteers/   # Registration API
│       └── admin/        # Admin authentication APIs
├── components/
│   ├── AdminHeader.tsx
│   ├── AdminFooter.tsx
│   └── VolunteerTable.tsx
├── lib/
│   ├── auth.ts          # Authentication logic
│   └── prisma.ts        # Database client
└── prisma/
    └── schema.prisma    # Database schema
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

### Database Management

```bash
# Regenerate after schema changes
npm run db:generate
npm run db:push

# View/edit data visually
npm run db:studio
```

## Documentation

- [QUICK_START.md](./QUICK_START.md) - Quick setup guide
- [ADMIN_SETUP.md](./ADMIN_SETUP.md) - Admin panel setup
- [SECURITY.md](./SECURITY.md) - Security implementation details

## Production Deployment

1. Set environment variables
2. Use PostgreSQL for production database
3. Run database migrations
4. Build application: `npm run build`
5. Start server: `npm start`

### Environment Variables for Production

```env
DATABASE_URL="postgresql://user:password@host:5432/kumbh_mela"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="<strong-password>"
NODE_ENV="production"
```

## Support

For issues or questions, refer to:
- Database schema in `prisma/schema.prisma`
- API routes in `app/api/`
- Component documentation in respective files

---

Built for: Kumbh Mela 2027 Volunteer Management  
Focus: Professional, accessible, high-performance government application
