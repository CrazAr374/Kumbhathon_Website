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

interface NewsListProps {
  refreshTrigger?: number
}

const URGENCY_COLORS: Record<string, string> = {
  'Low': 'bg-blue-100 text-blue-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'High': 'bg-orange-100 text-orange-800',
  'Critical': 'bg-red-100 text-red-800'
}

export default function NewsList({ refreshTrigger = 0 }: NewsListProps) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    fetchNews()
  }, [refreshTrigger])

  async function fetchNews() {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/news')
      
      if (!response.ok) throw new Error('Failed to fetch news')
      
      const data = await response.json()
      setNews(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this news?')) return

    try {
      setDeletingId(id)
      const response = await fetch(`/api/admin/news/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete news')

      setNews(news.filter(item => item.id !== id))
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 border border-stone-200">
        <p className="text-stone-600">Loading news...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6 border border-stone-200">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow border border-stone-200 overflow-hidden">
      <div className="p-6 border-b border-stone-200">
        <h2 className="text-2xl font-black text-stone-900">
          Active News & Alerts ({news.length})
        </h2>
      </div>

      {news.length === 0 ? (
        <div className="p-6 text-center text-stone-600">
          No news or alerts posted yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Urgency</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Posted By</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-stone-700 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item) => (
                <tr key={item.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-stone-900">{item.title}</div>
                    <div className="text-sm text-stone-600 mt-1">{item.description}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700">{item.location}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${URGENCY_COLORS[item.urgency]}`}>
                      {item.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700">{item.author}</td>
                  <td className="px-6 py-4 text-sm text-stone-600">
                    {new Date(item.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={deletingId === item.id}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white text-sm font-semibold rounded transition-colors"
                    >
                      {deletingId === item.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
