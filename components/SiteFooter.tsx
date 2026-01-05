'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n/context'

export default function SiteFooter() {
  const { t } = useI18n()
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/image.png"
              alt="Kumbhathon Logo"
              width={50}
              height={50}
              className="h-12 w-auto mb-2"
            />
            <p className="text-sm text-amber-50/80">Coordinate, Serve, Celebrate.</p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-amber-50/90">Quick links</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/">
                {t('header.home')}
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/volunteer">
                {t('header.volunteer')}
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/about-us">
                {t('header.aboutUs')}
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/news-and-alerts">
                {t('header.newsAlerts')}
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/admin/login">
                {t('admin.login')}
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-amber-50/90">Contact Details</div>
            <div className="mt-3 space-y-2 text-sm text-amber-50/80">
              <div>
                <div className="font-semibold text-amber-50/90">Phone</div>
                <div>0253-2461909</div>
              </div>
              <div>
                <div className="font-semibold text-amber-50/90">Email</div>
                <div>kumbhmela.2027@mah.gov.in</div>
              </div>
              <div>
                <div className="font-semibold text-amber-50/90">Address</div>
                <div className="text-xs">Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA)<br/>Office of the Divisional Commissioner, Nashik Division<br/>Nashik Road, Nashik, Maharashtra.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-amber-50/15 pt-6 text-center text-xs text-amber-50/70">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
