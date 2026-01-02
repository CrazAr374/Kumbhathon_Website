'use client'

import { useState, useMemo } from 'react'

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

type Props = {
  volunteers: Volunteer[]
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export default function VolunteerTable({ volunteers }: Props) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVolunteers = useMemo(() => {
    if (!searchTerm.trim()) return volunteers
    
    const search = searchTerm.toLowerCase()
    return volunteers.filter(v => 
      v.fullName.toLowerCase().includes(search) ||
      v.email.toLowerCase().includes(search) ||
      v.mobileNumber.includes(search) ||
      v.skills.toLowerCase().includes(search) ||
      v.preferredRole.toLowerCase().includes(search) ||
      v.languagesKnown.toLowerCase().includes(search) ||
      v.preferredShift.toLowerCase().includes(search) ||
      (v.area && v.area.toLowerCase().includes(search))
    )
  }, [volunteers, searchTerm])

  const handleExportCSV = () => {
    // CSV headers
    const headers = [
      'Name',
      'Mobile',
      'Email',
      'Available From',
      'Available To',
      'Preferred Shift',
      'Preferred Role',
      'Skills',
      'Languages Known',
      'Local Resident',
      'Area',
      'Emergency Contact Name',
      'Emergency Contact Number',
      'Medical Condition',
      'Consent Given',
      'Registered Date'
    ]

    // Convert data to CSV rows
    const rows = filteredVolunteers.map(v => [
      v.fullName,
      v.mobileNumber,
      v.email,
      v.availableFrom,
      v.availableTo,
      v.preferredShift,
      v.preferredRole,
      v.skills,
      v.languagesKnown,
      v.isLocalResident ? 'Yes' : 'No',
      v.area || '',
      v.emergencyContactName || '',
      v.emergencyContactNumber || '',
      v.medicalCondition || '',
      v.consentGiven ? 'Yes' : 'No',
      formatDate(v.createdAt)
    ])

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `kumbh-volunteers-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-info">
          <h1>Volunteer Registrations</h1>
          <p>{filteredVolunteers.length} of {volunteers.length} entries</p>
        </div>
        <div className="table-actions">
          <input
            type="text"
            placeholder="Search volunteers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button
            onClick={handleExportCSV}
            className="export-button"
            disabled={filteredVolunteers.length === 0}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Availability</th>
              <th>Shift</th>
              <th>Role</th>
              <th>Skills</th>
              <th>Languages</th>
              <th>Local</th>
              <th>Area</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.length === 0 ? (
              <tr>
                <td colSpan={11} className="no-data">
                  {searchTerm ? 'No matching volunteers found' : 'No volunteers registered yet'}
                </td>
              </tr>
            ) : (
              filteredVolunteers.map((volunteer) => (
                <tr key={volunteer.id}>
                  <td className="name-col">{volunteer.fullName}</td>
                  <td>{volunteer.mobileNumber}</td>
                  <td>{volunteer.email}</td>
                  <td className="date-col">{volunteer.availableFrom} - {volunteer.availableTo}</td>
                  <td>{volunteer.preferredShift}</td>
                  <td>{volunteer.preferredRole}</td>
                  <td>{volunteer.skills}</td>
                  <td>{volunteer.languagesKnown}</td>
                  <td>{volunteer.isLocalResident ? 'Yes' : 'No'}</td>
                  <td>{volunteer.area || '-'}</td>
                  <td className="date-col">{formatDate(volunteer.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}