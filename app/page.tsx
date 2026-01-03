import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import NewsSection from '@/components/NewsSection'

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-orange-200/70 bg-white/90 p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-stone-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <SiteHeader />

      <main id="home">
        {/* Hero with Background */}
        <section className="relative h-[calc(100vh-64px)] overflow-hidden">
          {/* Background Image - Replace with your image URL */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            data-bg-image="kumbh-hero"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/10" />
          
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-linear-to-b from-amber-900 via-orange-800 to-amber-700 opacity-60" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Serve the Divine
              </h1>
              
              <p className="text-xl font-bold text-orange-100 sm:text-2xl">
                Nashik Kumbh Mela 2027
              </p>

              <p className="mx-auto max-w-2xl text-pretty text-sm leading-7 text-white sm:text-base">
                Be part of history. Join thousands of passionate volunteers in creating an unforgettable spiritual experience for millions. 
                Serve, connect, and make a lasting difference at the world&apos;s largest gathering.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:pt-4">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  Register as Volunteer →
                </Link>
                <Link
                  href="/#about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 backdrop-blur"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kumbhamela Section */}
        <section className="relative bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {/* Main Card */}
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-3">
                <h2 id="about" className="text-4xl font-black text-stone-900 sm:text-5xl">
                  What is Kumbh Mela?
                </h2>
                <p className="text-lg font-semibold text-orange-600 tracking-wide">
                  The World's Largest Spiritual Gathering
                </p>
              </div>

              {/* Main Description */}
              <p className="text-lg leading-8 text-stone-700 text-center">
                The <span className="font-bold text-orange-700">Kumbh Mela</span> is a transcendent celebration where millions of pilgrims, saints, and seekers converge to take a sacred dip in the holy <span className="font-bold text-orange-700">Godavari River</span>. It is the world's largest peaceful gathering—a spiritual experience that transcends boundaries and unites humanity.
              </p>

              {/* Two Column Stats */}
              <div className="grid gap-8 sm:grid-cols-2 py-4">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">Every 12 Years</div>
                  <p className="text-stone-700 leading-relaxed">
                    Held on the sacred banks of the Godavari River in Nashik, representing centuries of unbroken devotion, culture, and spiritual unity.
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-2">Infinite Impact</div>
                  <p className="text-stone-700 leading-relaxed">
                    Millions of visitors, countless traditions, and a transformative spiritual journey that shapes lives and preserves ancient wisdom.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-orange-300 to-transparent" />

              {/* Volunteers Section */}
              <div className="space-y-4 bg-linear-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-2xl font-black text-orange-800">
                  Why Volunteers Matter
                </h3>
                <p className="text-base leading-7 text-stone-700">
                  <span className="font-bold text-orange-700">Volunteers are the backbone</span> of this magnificent event. From crowd management and sanitation to medical support, security, and logistics—your service directly impacts millions and ensures this sacred celebration remains safe, organized, and spiritually fulfilling.
                </p>
                <p className="text-center italic text-stone-600 text-base pt-2 border-t border-orange-200">
                  "Seva (selfless service) is the highest form of worship."
                </p>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <p className="text-lg leading-7 text-stone-700 font-medium">
                  Join us in this extraordinary mission. Become a volunteer and be part of an incredible spiritual and cultural legacy that will resonate for generations to come.
                </p>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-orange-700 transition-all duration-200 hover:shadow-xl"
                >
                  Start Volunteering Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="relative bg-linear-to-b from-stone-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black text-stone-900 sm:text-5xl">
                How We Support You
              </h2>
              <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                Everything you need to volunteer with confidence and clarity
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 - Volunteer Registration */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="3" />
                        <path d="M12 14c-3 0-4.5 1.5-4.5 3.5v2.5h9v-2.5c0-2-1.5-3.5-4.5-3.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      Registration
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    Easy sign-up process to share your skills and availability. Whether it's crowd management, sanitation, medical support, or logistics—we have a role for you.
                  </p>
                </div>
              </div>

              {/* Card 2 - Real-Time Updates */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16v12H4z" />
                        <path d="M4 4l8-2 8 2" />
                        <path d="M8 16v2M12 16v2M16 16v2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      Live Updates
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    Stay informed with official announcements, safety protocols, schedule updates, and important guidelines directly from the administration.
                  </p>
                </div>
              </div>

              {/* Card 3 - Safety & Support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2L4 5v7c0 7 8 9 8 9s8-2 8-9V5l-8-3z" />
                        <path d="M10 13l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-black text-stone-900">
                      Safety First
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base leading-7 text-stone-600 grow">
                    Connect with official Nashik Police, Municipal Corporation, and medical teams. Your safety and wellbeing are our priority throughout the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Alerts Section */}
        <section id="news" className="relative bg-linear-to-b from-orange-50 via-amber-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-stone-900 sm:text-4xl">
                News & Alerts
              </h2>
              <p className="mt-3 text-lg text-stone-600">
                Stay connected with the latest updates from the administration
              </p>
            </div>

            <div className="rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-lg sm:p-12">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Important Updates Coming Soon</h3>
                  <p className="mt-2 text-stone-700 leading-relaxed">
                    Official announcements, volunteer schedules, safety guidelines, and event updates will be published here regularly. Check back often to stay informed and prepared for the event.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-orange-50 border-l-4 border-orange-600">
                <p className="text-sm font-semibold text-orange-900">
                  💡 Tip: Subscribe to receive instant notifications for critical updates and announcements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News & Alerts Section */}
        <NewsSection />
      </main>

      <SiteFooter />
    </div>
  )
}