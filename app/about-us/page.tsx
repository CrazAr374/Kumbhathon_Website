import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import AboutUsSection from '@/components/AboutUsSection'

export const metadata = {
  title: 'Information & Guidelines - Kumbhathon 2027',
  description: 'Learn about serving at the Kumbh Mela, roles, responsibilities, and FAQs'
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <AboutUsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
