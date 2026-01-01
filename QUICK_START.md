# Quick Start Guide - Admin Panel

## 🚀 Setup (First Time)

1. **Install dependencies:**
   ```bash
   cd kumbh-admin
   npm install
   ```

2. **Create environment file:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and set:
   # - DATABASE_URL (your database connection)
   # - ADMIN_USERNAME (your admin username)
   # - ADMIN_PASSWORD (your admin password)
   ```

3. **Setup database:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Start the application:**
   ```bash
   npm run dev
   ```

5. **Access admin panel:**
   - Open: http://localhost:3000/admin/login
   - Login with credentials from `.env.local`

## 🔐 Admin Panel Features

### Login Page
- ✅ Professional government-themed design
- ✅ Security badge and notice
- ✅ Secure authentication
- ✅ Fixed viewport (no scrolling needed)
- ✅ Fully responsive

### Dashboard
- ✅ Clean header with logout button
- ✅ Searchable volunteer table
- ✅ Real-time search filtering
- ✅ Professional earth-tone color scheme
- ✅ Minimal footer
- ✅ Mobile responsive

### Security
- ✅ Protected routes
- ✅ Session-based authentication
- ✅ Proper logout functionality
- ✅ Auto-redirect on unauthorized access
- ✅ Multiple security layers

## 📱 Usage

### Logging In
1. Navigate to `/admin/login`
2. Enter username and password
3. Click "Sign In"
4. Redirected to dashboard

### Searching Volunteers
1. Use search box in dashboard
2. Type any term (name, email, phone, skills)
3. Results filter in real-time

### Logging Out
1. Click "Logout" in header
2. Session cleared automatically
3. Redirected to login page
4. Must re-login to access dashboard

## 🎨 Design Features

- **Color Scheme**: Olive green (#2d3e2e) and earth tones
- **No**: Blue, purple, or gradients
- **Style**: Professional, government-appropriate
- **Performance**: Optimized, minimal hover effects
- **Accessibility**: Proper labels, contrast, keyboard navigation

## ⚠️ Important Notes

- Keep `.env.local` secure and never commit it
- Change default credentials in production
- Session expires after 24 hours
- Only one admin user supported (extend as needed)

## 📞 Support

See full documentation:
- `ADMIN_SETUP.md` - Complete setup guide
- `SECURITY.md` - Security implementation details
- `README.md` - Project overview
