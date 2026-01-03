import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold">Kumbh Seva</div>
            <p className="mt-2 text-sm text-amber-50/80">Coordinate, Serve, Celebrate.</p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-amber-50/90">Quick links</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/#home">
                Home
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/volunteer">
                Register
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/#about">
                Information
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/#news">
                News
              </Link>
              <Link className="block text-amber-50/80 hover:text-amber-50" href="/admin/login">
                Admin Login
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-amber-50/90">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-amber-50/80">
              <div>help@kumbhnashik.gov.in</div>
              <div>+91 123 456 7890</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-amber-50/15 pt-6 text-center text-xs text-amber-50/70">
          © 2027 Nashik Kumbh Mela Authority. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
