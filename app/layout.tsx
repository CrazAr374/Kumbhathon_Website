import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kumbh Mela Admin Panel',
  description: 'Volunteer management system for Nashik Kumbh Mela',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}