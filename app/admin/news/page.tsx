import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'
import NewsForm from '@/components/NewsForm'
import NewsList from '@/components/NewsList'

export default async function AdminNewsPage() {
  // Server-side authentication check
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect('/admin/login')
  }

  return (
    <>
      <AdminHeader />
      <main className="dashboard-main" style={{ minHeight: 'calc(100vh - 128px)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-stone-900 mb-2">
              News & Alerts Management
            </h1>
            <p className="text-stone-600">
              Create, manage, and delete news items and alerts for the Kumbhathon website
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form - Takes 1/3 on large screens */}
            <div className="lg:col-span-1">
              <NewsForm />
            </div>

            {/* News List - Takes 2/3 on large screens */}
            <div className="lg:col-span-2">
              <NewsList />
            </div>
          </div>
        </div>
      </main>
      <AdminFooter />
    </>
  )
}
