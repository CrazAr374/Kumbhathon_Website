import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/lib/auth'
import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'
import VolunteerTable from '@/components/VolunteerTable'

type Volunteer = {
  id: string
  fullName: string
  email: string
  mobileNumber: string
  availableFrom: string
  availableTo: string
  preferredShift: string
  skills: string
  preferredRole: string
  languagesKnown: string
  isLocalResident: boolean
  area: string | null
  emergencyContactName: string | null
  emergencyContactNumber: string | null
  medicalCondition: string | null
  consentGiven: boolean
  createdAt: Date
}

async function getVolunteers(): Promise<Volunteer[]> {
  const volunteers = await prisma.volunteer.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return volunteers
}

export default async function AdminDashboard() {
  // Server-side authentication check
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect('/admin/login')
  }

  const volunteers = await getVolunteers()

  return (
    <>
      <AdminHeader />
      <main className="dashboard-main">
        <VolunteerTable volunteers={volunteers} />
      </main>
      <AdminFooter />
    </>
  )
}