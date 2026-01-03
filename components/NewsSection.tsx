'use client'

import { useEffect, useState } from 'react'

interface NewsItem {
  id: string
  title: string
  description: string
  location: string
  category: string
  urgency: string
  content: string
  author: string
  createdAt: string
}

const URGENCY_COLORS: Record<string, { bg: string; text: string; badge: string }> = {
  'Low': { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  'Medium': { bg: 'bg-yellow-50', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-700' },
  'High': { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
  'Critical': { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-700' }
}

const CATEGORY_ICONS: Record<string, string> = {
  'Alert': '🚨',
  'Update': '📢',
  'Event': '📅',
  'Safety': '🛡️',
  'Registration': '📝',
  'Announcement': '📣'
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  useEffect(() => {
    fetchNews()
    // Set up polling for real-time updates every 30 seconds
    const interval = setInterval(fetchNews, 30000)
    return () => clearInterval(interval)
  }, [])

  async function fetchNews() {
    try {
      const params = new URLSearchParams()
      if (selectedCategory !== 'all') params.append('category', selectedCategory)
      if (selectedLocation !== 'all') params.append('location', selectedLocation)

      const response = await fetch(`/api/admin/news?${params}`)
      if (response.ok) {
        const data = await response.json()
        setNews(Array.isArray(data) ? data : [])
      }
    } catch (error) {
      console.error('Failed to fetch news:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get unique categories and locations from news
  const categories = Array.from(new Set(news.map(item => item.category)))
  const locations = Array.from(new Set(news.map(item => item.location)))

  const filteredNews = news.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const locationMatch = selectedLocation === 'all' || item.location === selectedLocation
    return categoryMatch && locationMatch
  })

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">
            News & Alerts
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl">
            Stay updated with the latest news, alerts, and announcements from Kumbhathon 2027
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Filter by Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-stone-600">Loading news...</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-600 text-lg">No news available at the moment.</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && filteredNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => {
              const colors = URGENCY_COLORS[item.urgency] || URGENCY_COLORS['Low']
              const icon = CATEGORY_ICONS[item.category] || '📰'

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${colors.bg}`}
                >
                  {/* Header with category and urgency */}
                  <div className="p-5 border-b border-stone-200 bg-white">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-2xl">{icon}</span>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${colors.badge}`}>
                        {item.urgency}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-stone-900 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <p className="text-stone-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="text-sm">
                        <span className="font-semibold text-stone-700">Location: </span>
                        <span className="text-stone-600">{item.location}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-stone-700">Posted by: </span>
                        <span className="text-stone-600">{item.author}</span>
                      </div>
                    </div>

                    <div className="text-xs text-stone-500 mt-auto pt-4 border-t border-stone-200">
                      {new Date(item.createdAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>

                  {/* Full content preview (expandable) */}
                  {item.content && (
                    <div className="px-5 pb-5 pt-0">
                      <details className="cursor-pointer">
                        <summary className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                          Read Full Details
                        </summary>
                        <div className="mt-3 p-3 bg-white rounded border border-stone-200 text-sm text-stone-700">
                          {item.content}
                        </div>
                      </details>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Real-time indicator */}
        {!loading && (
          <div className="mt-8 text-center">
            <p className="text-xs text-stone-500">
              ✓ Updates automatically every 30 seconds
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
