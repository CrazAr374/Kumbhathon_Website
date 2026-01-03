'use client'

import { useState } from 'react'
import VolunteerTable from './VolunteerTable'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

interface Volunteer {
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

interface AdminDashboardClientProps {
  volunteers: Volunteer[]
}

type TabType = 'volunteers' | 'news'

export default function AdminDashboardClient({ volunteers }: AdminDashboardClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('volunteers')
  const [refreshNews, setRefreshNews] = useState(0)

  const handleNewsAdded = () => {
    setRefreshNews(prev => prev + 1)
  }

  return (
    <div>
      {/* Tabs Header */}
      <div className="mb-8">
        <div className="flex gap-2 border-b border-stone-200">
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`px-6 py-4 font-normal text-lg transition-colors ${
              activeTab === 'volunteers'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Volunteer Data
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-6 py-4 font-normal text-lg transition-colors ${
              activeTab === 'news'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            News & Alerts
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300">
        {activeTab === 'volunteers' && (
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-black text-stone-900 mb-2">
                Volunteer Management
              </h1>
              <p className="text-stone-600">
                View and manage all registered volunteers for Kumbhathon 2027
              </p>
            </div>
            <VolunteerTable volunteers={volunteers} />
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-black text-stone-900 mb-2">
                News & Alerts Management
              </h1>
              <p className="text-stone-600">
                Create, manage, and delete news items and alerts for the Kumbhathon website
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form - Takes 1/3 on large screens */}
              <div className="lg:col-span-1">
                <NewsForm onNewsAdded={handleNewsAdded} />
              </div>

              {/* News List - Takes 2/3 on large screens */}
              <div className="lg:col-span-2">
                <NewsList refreshTrigger={refreshNews} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
