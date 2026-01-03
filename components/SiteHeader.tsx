"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  // Close menu on hash-route changes (basic UX for anchor links)
  useEffect(() => {
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      {/* Backdrop overlay - closes menu on tap */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/0 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 border-b border-amber-200/20 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
              <span className="text-sm font-semibold">ॐ</span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-orange-700">KUMBH SEWA</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-stone-700 sm:flex">
            <Link href="/#home" className="hover:text-orange-700">
              Home
            </Link>
            <Link href="/#about" className="hover:text-orange-700">
              About us
            </Link>
            <Link href="/#news" className="hover:text-orange-700">
              News &amp; Alerts
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <Link
              href="/volunteer"
              className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
            >
              Volunteer Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white/70 p-2 text-stone-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 sm:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.29 9.18 12 2.89 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel - slides down from header */}
        <div
          className={`absolute left-0 right-0 top-16 origin-top transition-all duration-300 ease-in-out sm:hidden ${
            open
              ? 'visible opacity-100'
              : 'invisible opacity-0 -translate-y-2'
          }`}
          data-menu-open={open}
        >
          <div className="border-b border-amber-200/60 bg-white/95 backdrop-blur shadow-lg">
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <div className="space-y-1 text-sm text-stone-700">
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/#home"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/#about"
                  onClick={() => setOpen(false)}
                >
                  About us
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  href="/#news"
                  onClick={() => setOpen(false)}
                >
                  News &amp; Alerts
                </Link>
              </div>

              <div className="mt-2 pt-2 border-t border-amber-200/40">
                <Link
                  href="/volunteer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Volunteer Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
