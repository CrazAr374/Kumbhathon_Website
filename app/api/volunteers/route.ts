import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const {
      fullName,
      email,
      mobileNumber,
      availableFrom,
      availableTo,
      preferredShift,
      skills,
      preferredRole,
      languagesKnown,
      isLocalResident,
      area,
      emergencyContactName,
      emergencyContactNumber,
      medicalCondition,
      consentGiven
    } = data
    
    // Required fields validation
    if (!fullName || !email || !mobileNumber || !availableFrom || !availableTo || 
        !preferredShift || !skills || !preferredRole || !languagesKnown || 
        isLocalResident === undefined || !consentGiven) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Mobile number validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/
    if (!mobileRegex.test(mobileNumber.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid mobile number. Please enter 10 digits' },
        { status: 400 }
      )
    }
    
    const volunteer = await prisma.volunteer.create({
      data: {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        mobileNumber: mobileNumber.trim(),
        availableFrom: availableFrom.trim(),
        availableTo: availableTo.trim(),
        preferredShift: preferredShift.trim(),
        skills: skills.trim(),
        preferredRole: preferredRole.trim(),
        languagesKnown: languagesKnown.trim(),
        isLocalResident: Boolean(isLocalResident),
        area: area?.trim() || null,
        emergencyContactName: emergencyContactName?.trim() || null,
        emergencyContactNumber: emergencyContactNumber?.trim() || null,
        medicalCondition: medicalCondition?.trim() || null,
        consentGiven: Boolean(consentGiven),
      }
    })
    
    return NextResponse.json(
      { 
        message: 'Registration successful',
        id: volunteer.id 
      },
      { status: 201 }
    )
  } catch (error: any) {
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }
    
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}