import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const authenticated = await isAuthenticated()
    
    if (authenticated) {
      return NextResponse.json({ authenticated: true })
    }
    
    return NextResponse.json({ authenticated: false }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
