# Kumbh Mela 2027 - Volunteer Management System

A professional, government-focused volunteer registration and management system for Kumbh Mela 2027, developed for the Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA).

## 🎯 Overview

This is a comprehensive web application that manages volunteer registration, displays authority information, and provides news/alert management for the Kumbh Mela 2027 event. The system features a public-facing website with volunteer registration and an admin dashboard for managing volunteers and news.

## ✨ Key Features

### 📱 Public Website

#### Pages
- **Home** (`/`) - Hero section with call-to-action
- **Volunteer Registration** (`/volunteer`) - Beautiful form matching website design with background image
- **About Us / Guidelines** (`/about-us`) - Information and FAQs
- **News & Alerts** (`/news-and-alerts`) - Latest updates and announcements
- **Authorities** (`/authorities`) - List of 22 NTKMA members with roles and designations

#### Navigation
- Desktop: Horizontal navigation with 5 links
  - Home | About us | News & Alerts | Authorities | Volunteer Now (CTA)
- Mobile: Hamburger menu with slide-down panel
- Sticky header with transparent background
- Responsive design across all device sizes

### 📝 Volunteer Registration Form
- **6 Form Sections**:
  1. Basic Details (Name, Email, Mobile)
  2. Availability (Dates, Preferred Shift)
  3. Skills & Preferences (Skills, Role, Languages)
  4. Local Context (Residency, Area)
  5. Safety (Emergency Contacts, Medical Info)
  6. Consent Agreement
- Real-time validation and error handling
- Success/error notifications with smooth animations
- Mobile-optimized with large touch targets
- Full-width background image with semi-transparent overlay
- Orange accent color matching website theme

### 👥 Authorities Page
- Professional member directory with 22 NTKMA members
- Desktop: Clean table layout with columns for serial #, role, and designation
- Mobile: Connected list with dividers (no gaps between items)
- Color-coded member types:
  - 🟠 Orange: Chairperson (1)
  - 🟡 Amber: Vice-Chairpersons (2)
  - 🔵 Blue: Member-Secretary (1)
  - ⚫ Gray: Ex-officio Members (18)
- Summary statistics showing member breakdown
- Fully responsive across all screen sizes

### 🛡️ Admin Dashboard

#### Admin Login (`/admin/login`)
- Secure authentication system
- Session-based access control
- Proper logout functionality

#### Admin Dashboard (`/admin/dashboard`)
- View all registered volunteers
- **Search functionality** for quick lookup
- **Export to CSV** for data analysis
- Sortable data table
- Volunteer information display

#### News Management (`/admin/news`)
- Create new news/alerts
- News form fields:
  - Title, Description, Location
  - Category, Urgency Level
  - Detailed Content, Author
- Edit and delete news items
- Delete confirmation dialog
- Real-time updates

### 📍 Contact Information
**Updated Contact Details:**
- **Phone**: 0253-2461909
- **Email**: kumbhmela.2027@mah.gov.in
- **Address**: Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA), Office of the Divisional Commissioner, Nashik Division, Nashik Road, Nashik, Maharashtra

**Emergency Services:**
- Police: 100
- Ambulance: 108
- Fire: 101

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16+ (Turbopack)
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Authentication**: Custom session-based
- **Language**: TypeScript
- **API**: Next.js API Routes

### Project Structure

```
kumbh-admin/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about-us/
│   │   └── page.tsx
│   ├── authorities/
│   │   └── page.tsx             # NEW: Authorities page
│   ├── volunteer/
│   │   ├── page.tsx             # Improved UI
│   │   └── volunteer.css        # Updated styling
│   ├── news-and-alerts/
│   │   └── page.tsx
│   ├── admin/
│   │   ├── login/
│   │   ├── dashboard/
│   │   └── news/
│   ├── api/
│   │   ├── admin/
│   │   │   ├── news/
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts # FIXED: Async params
│   │   │   └── ...
│   │   └── volunteers/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SiteHeader.tsx           # Updated nav
│   ├── SiteFooter.tsx           # Updated contacts
│   ├── AuthoritiesSection.tsx   # NEW component
│   ├── AboutUsSection.tsx       # Updated contacts
│   ├── NewsSection.tsx
│   ├── VolunteerTable.tsx
│   └── ...
├── lib/
│   ├── auth.ts
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
└── public/
    ├── Home_bg.png
    ├── bg_about.png
    └── image.png
```

## 🎨 Design Features

### Volunteer Form UI
- **Hero Section**: Full-width background image with 50% white overlay
- **Form Container**: Centered white card (600px max) with rounded corners and shadow
- **Responsive Breakpoints**:
  - Desktop (>768px): 600px width, 2-column grid
  - Tablet (480-768px): Full width minus padding, 2-column grid
  - Mobile (<480px): Full width, 1-column grid
- **Color Scheme**: 
  - Primary: Orange (#dc5f3c)
  - Border: Brown (#d4af8f)
  - Text: Dark gray (#333)
  - Focus: Orange with light background

### Authority Members List
- **Desktop (lg+ screens)**: Professional table with sticky headers
- **Tablet/Mobile (< lg)**: Connected list with:
  - Serial numbers in circles
  - Color-coded badges for roles
  - No gaps between items
  - Hover effects for interactivity
- **Responsive Typography**: Font sizes scale with screen size
- **Accessibility**: Proper semantic HTML, color contrast

## 🐛 Bug Fixes & Improvements

### Fixed: News Delete Functionality
**Problem**: "Failed to delete news" error in admin panel
**Root Cause**: Next.js 16+ requires params as Promise in route handlers
**Solution**:
```typescript
// Updated /api/admin/news/[id]/route.ts

// Before (Next.js <15)
export async function DELETE(request, { params }: { params: { id: string } })

// After (Next.js 16+)
export async function DELETE(request, { params }: { params: Promise<{ id: string }> })
const { id } = await params
```

### Improvements Made
1. ✅ Volunteer form UI redesigned with background image
2. ✅ Added header and footer to volunteer page
3. ✅ Made form responsive across all screen sizes
4. ✅ Updated contact information everywhere (footer, about, authorities)
5. ✅ Added new "Authorities" page to navigation
6. ✅ Created comprehensive authorities list component
7. ✅ Fixed async params issue in news delete route
8. ✅ Improved mobile list responsiveness (connected items, no gaps)

## 📋 Database Schema

### Volunteer Model
```prisma
model Volunteer {
  id                      String   @id @default(cuid())
  fullName                String
  email                   String
  mobileNumber            String
  availableFrom           String
  availableTo             String
  preferredShift          String
  skills                  String
  preferredRole           String
  languagesKnown          String
  isLocalResident         Boolean
  area                    String?
  emergencyContactName    String?
  emergencyContactNumber  String?
  medicalCondition        String?
  consentGiven            Boolean
  createdAt               DateTime @default(now())
}
```

### News Model
```prisma
model News {
  id          String   @id @default(cuid())
  title       String
  description String
  location    String
  category    String
  urgency     String
  content     String
  author      String
  createdAt   DateTime @default(now())
}
```

## 🔐 Security Features

- Multi-layer authentication
- HTTP-only session cookies
- Server-side validation
- Protected admin routes
- Proper logout with session clearing
- Environment-based credentials

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- SQLite or PostgreSQL

### Installation

```bash
# Clone repository
git clone https://github.com/CrazAr374/Kumbhathon_Website.git
cd kumbh-admin

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Configure database in .env.local
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"

# Setup database
npx prisma migrate dev
npx prisma generate

# Run development server
npm run dev
```

Access the application:
- Website: http://localhost:3000
- Volunteer Form: http://localhost:3000/volunteer
- Admin Login: http://localhost:3000/admin/login

### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Production server

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile** (<480px): Optimized vertical layout
- **Tablet** (480-768px): Improved 2-column grids
- **Desktop** (>768px): Full-width with enhanced spacing

## 📞 Contact & Support

**NTKMA Contact Information:**
- Phone: 0253-2461909
- Email: kumbhmela.2027@mah.gov.in
- Address: Office of the Divisional Commissioner, Nashik Division, Nashik Road, Nashik, Maharashtra

**Emergency Services:**
- Police: 100
- Ambulance: 108
- Fire: 101

## 📄 License

Developed for Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA)

## 🙏 Acknowledgments

- Nashik–Trimbakeshwar Kumbh Mela Authority
- Office of the Divisional Commissioner, Nashik Division
- All volunteers and team members

---

**Latest Update**: January 4, 2026
- ✅ Volunteer form UI improvement
- ✅ New Authorities page with member directory
- ✅ Updated contact information
- ✅ Fixed news delete bug
- ✅ Improved mobile responsiveness
