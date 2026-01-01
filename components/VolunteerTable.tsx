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

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-info">
          <h1>Volunteer Registrations</h1>
          <p>{filteredVolunteers.length} of {volunteers.length} entries</p>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search volunteers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
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