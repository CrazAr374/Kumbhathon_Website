'use client'

import { useState } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './volunteer.css'

export default function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    availableFrom: '',
    availableTo: '',
    preferredShift: '',
    skills: '',
    preferredRole: '',
    languagesKnown: '',
    isLocalResident: '',
    area: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    medicalCondition: '',
    consentGiven: false
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isLocalResident: formData.isLocalResident === 'yes'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({
          fullName: '',
          email: '',
          mobileNumber: '',
          availableFrom: '',
          availableTo: '',
          preferredShift: '',
          skills: '',
          preferredRole: '',
          languagesKnown: '',
          isLocalResident: '',
          area: '',
          emergencyContactName: '',
          emergencyContactNumber: '',
          medicalCondition: '',
          consentGiven: false
        })
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(data.error || 'Registration failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="volunteer-page">
      <SiteHeader />
      
      <div className="volunteer-hero" style={{ backgroundImage: "url('/Home_bg.png')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Volunteer Registration</h1>
        </div>
      </div>

      <main className="volunteer-main" style={{ backgroundImage: "url('/Home_bg.png')" }}>
        <div className="form-container">
          {success && (
            <div className="success-alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              <span>Registration successful! Thank you for volunteering.</span>
            </div>
          )}

          {error && (
            <div className="error-alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="volunteer-form">
            {/* Section 1: Basic Details */}
            <div className="form-section">
              <h2>Basic Details</h2>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="mobileNumber">Mobile Number <span className="required">*</span></label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                  />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Availability */}
            <div className="form-section">
              <h2>Availability</h2>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="availableFrom">Available From <span className="required">*</span></label>
                  <input
                    id="availableFrom"
                    name="availableFrom"
                    type="date"
                    required
                    value={formData.availableFrom}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="availableTo">Available To <span className="required">*</span></label>
                  <input
                    id="availableTo"
                    name="availableTo"
                    type="date"
                    required
                    value={formData.availableTo}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="preferredShift">Preferred Shift <span className="required">*</span></label>
                  <select
                    id="preferredShift"
                    name="preferredShift"
                    required
                    value={formData.preferredShift}
                    onChange={handleChange}
                  >
                    <option value="">Select shift</option>
                    <option value="Morning (6 AM - 12 PM)">Morning (6 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 6 PM)">Afternoon (12 PM - 6 PM)</option>
                    <option value="Evening (6 PM - 12 AM)">Evening (6 PM - 12 AM)</option>
                    <option value="Night (12 AM - 6 AM)">Night (12 AM - 6 AM)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Skills & Preferences */}
            <div className="form-section">
              <h2>Skills & Preferences</h2>
              <div className="form-grid">
                <div className="form-field full-width">
                  <label htmlFor="skills">Skills / Background <span className="required">*</span></label>
                  <textarea
                    id="skills"
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="E.g., First aid, crowd management, translation, IT support, etc."
                    rows={3}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="preferredRole">Preferred Role <span className="required">*</span></label>
                  <select
                    id="preferredRole"
                    name="preferredRole"
                    required
                    value={formData.preferredRole}
                    onChange={handleChange}
                  >
                    <option value="">Select role</option>
                    <option value="Crowd Management">Crowd Management</option>
                    <option value="First Aid / Medical Support">First Aid / Medical Support</option>
                    <option value="Information Desk">Information Desk</option>
                    <option value="Translation / Language Support">Translation / Language Support</option>
                    <option value="Registration & Documentation">Registration & Documentation</option>
                    <option value="Food & Water Distribution">Food & Water Distribution</option>
                    <option value="Cleanliness & Sanitation">Cleanliness & Sanitation</option>
                    <option value="Security & Safety">Security & Safety</option>
                    <option value="IT & Technical Support">IT & Technical Support</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="languagesKnown">Languages Known <span className="required">*</span></label>
                  <input
                    id="languagesKnown"
                    name="languagesKnown"
                    type="text"
                    required
                    value={formData.languagesKnown}
                    onChange={handleChange}
                    placeholder="E.g., Hindi, English, Marathi"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Local Context */}
            <div className="form-section">
              <h2>Local Context</h2>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="isLocalResident">Local resident of Nashik? <span className="required">*</span></label>
                  <select
                    id="isLocalResident"
                    name="isLocalResident"
                    required
                    value={formData.isLocalResident}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="area">Area (Optional)</label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Your locality or area"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Safety */}
            <div className="form-section">
              <h2>Safety (Optional)</h2>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="emergencyContactName">Emergency Contact Name</label>
                  <input
                    id="emergencyContactName"
                    name="emergencyContactName"
                    type="text"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    placeholder="Contact person name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
                  <input
                    id="emergencyContactNumber"
                    name="emergencyContactNumber"
                    type="tel"
                    value={formData.emergencyContactNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                  />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="medicalCondition">Medical Condition (Optional)</label>
                  <textarea
                    id="medicalCondition"
                    name="medicalCondition"
                    value={formData.medicalCondition}
                    onChange={handleChange}
                    placeholder="Any medical conditions we should be aware of"
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Consent */}
            <div className="form-section">
              <h2>Consent</h2>
              <div className="consent-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consentGiven"
                    required
                    checked={formData.consentGiven}
                    onChange={handleChange}
                  />
                  <span>
                    I hereby confirm that all information provided is accurate and I voluntarily consent to participate as a volunteer for Kumbh Mela 2027. <span className="required">*</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
