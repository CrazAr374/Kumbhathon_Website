# News & Alerts Management System

## Overview
The Kumbhathon website now includes a comprehensive News & Alerts management system that allows admins to post, manage, and delete news items in real-time. These news items are displayed on the public-facing website with filtering capabilities.

## Features

### Admin Features
- **Create News/Alerts**: Post news with multiple fields:
  - Title
  - Short Description
  - Detailed Content
  - Location (dropdown with predefined locations)
  - Category (Alert, Update, Event, Safety, Registration, Announcement)
  - Urgency Level (Low, Medium, High, Critical)
  - Posted By (Admin name/ID)

- **Manage News**: View all posted news in a table with:
  - Title and description
  - Location, category, and urgency badges
  - Posted by information
  - Timestamp
  - Delete button for each item

- **Delete News**: Remove outdated or incorrect news items with confirmation

### Public Features
- **News Feed**: Display all active news items in a grid layout
- **Filtering**: Filter by category or location
- **Real-time Updates**: Auto-refresh every 30 seconds
- **Rich Display**: Shows news cards with:
  - Category icon and badge
  - Urgency level indicator with color coding
  - Location and author information
  - Expandable full content details
  - Timestamp in India Standard Time (IST)

## Database Schema

### News Model
```prisma
model News {
  id          String   @id @default(uuid())
  title       String
  description String
  location    String
  category    String
  urgency     String
  content     String
  author      String
  isPublished Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("news")
}
```

## API Endpoints

### GET /api/admin/news
Fetch all published news items with optional filters

**Query Parameters:**
- `location` (optional): Filter by location
- `category` (optional): Filter by category

**Example:**
```
GET /api/admin/news?location=Main%20Ghat&category=Alert
```

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Sample News",
    "description": "Short description",
    "location": "Main Ghat",
    "category": "Alert",
    "urgency": "High",
    "content": "Full content details",
    "author": "Admin Name",
    "isPublished": true,
    "createdAt": "2026-01-03T12:00:00Z",
    "updatedAt": "2026-01-03T12:00:00Z"
  }
]
```

### POST /api/admin/news
Create a new news item

**Request Body:**
```json
{
  "title": "News Title",
  "description": "Short description",
  "location": "Main Ghat",
  "category": "Alert",
  "urgency": "High",
  "content": "Full content details",
  "author": "Admin Name"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "title": "News Title",
  ...
}
```

### DELETE /api/admin/news/:id
Delete a specific news item

**Response:**
```json
{
  "message": "News deleted successfully",
  "data": { ... }
}
```

### GET /api/admin/news/:id
Get a specific news item by ID

**Response:**
```json
{
  "id": "uuid",
  "title": "News Title",
  ...
}
```

## Components

### NewsForm.tsx
Reusable form component for admins to post news. Features:
- Multiple input fields with validation
- Dropdown selections for location, category, and urgency
- Textarea for detailed content
- Success/error messages
- Loading state

### NewsList.tsx
Displays list of all posted news in a table format. Features:
- Server-side filtering support
- Inline delete buttons
- Deletion confirmation
- Responsive table design
- Loading states

### NewsSection.tsx
Public-facing news display component. Features:
- Grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Category and location filtering
- Real-time polling (updates every 30 seconds)
- Expandable content details
- Color-coded urgency levels
- Category icons

## Admin Pages

### /admin/news
Main news management dashboard

**Access:** Admin-only (requires authentication)

**Layout:**
- Left sidebar: News form for posting
- Right content: List of all posted news items

## Public Pages

### / (Home page)
The news section is integrated into the landing page

**Location:** Bottom of landing page, before footer

## Predefined Options

### Locations
- All Locations
- Main Ghat
- North Entrance
- South Entrance
- East Entrance
- West Entrance
- Volunteer Center
- Medical Station
- Registration Desk

### Categories
- Alert (Emergency/Safety related)
- Update (General updates)
- Event (Event announcements)
- Safety (Safety information)
- Registration (Registration related)
- Announcement (General announcements)

### Urgency Levels
- Low (Blue)
- Medium (Yellow)
- High (Orange)
- Critical (Red)

## Usage Examples

### For Admins

1. **Post a News Item:**
   - Navigate to `/admin/news`
   - Fill in all required fields
   - Select appropriate location, category, and urgency
   - Click "Post News & Alert"
   - Success message will confirm posting

2. **Delete a News Item:**
   - Find the news item in the list
   - Click "Delete" button
   - Confirm deletion when prompted
   - Item will be removed from the database

### For Public Users

1. **View All News:**
   - Scroll to "News & Alerts" section on homepage
   - Browse all posted news items

2. **Filter News:**
   - Use "Filter by Category" dropdown to filter by type
   - Use "Filter by Location" dropdown to filter by location
   - Both filters work together

3. **Read Full Details:**
   - Click "Read Full Details" on any news card
   - Expandable section reveals full content

## Real-time Updates

The public news section automatically updates every 30 seconds to show:
- Newly posted news
- Updated timestamps
- Real-time availability of alerts and announcements

Users will see a "✓ Updates automatically every 30 seconds" indicator at the bottom.

## Security

- All news posting endpoints require admin authentication
- Deletion requires admin authentication
- Input validation on all fields
- XSS protection through proper escaping

## Future Enhancements

Potential features to add:
- Email notifications for critical alerts
- Push notifications to mobile devices
- Scheduling news to post at specific times
- Draft status for news items
- Edit functionality for existing news
- Rich text editor for content
- Image uploads
- Attachment support
- Archive/history of deleted news
- Admin audit logs
