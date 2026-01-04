import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import AuthoritiesSection from '@/components/AuthoritiesSection'

export const metadata = {
  title: 'Authorities - Kumbhathon 2027',
  description: 'Learn about the authorities and organizations involved in managing Kumbhathon 2027'
}

export default function AuthoritiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <AuthoritiesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
