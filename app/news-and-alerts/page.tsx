import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsSection from '@/components/NewsSection'

export const metadata = {
  title: 'News & Alerts - Kumbhathon 2027',
  description: 'Stay updated with the latest news, alerts, and announcements from Kumbhathon 2027'
}

export default function NewsAndAlertsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <NewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
