import AdminHeader from '@/components/AdminHeader'
import AdminFooter from '@/components/AdminFooter'
import '../admin.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  )
}