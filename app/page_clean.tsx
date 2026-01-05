import dynamic from 'next/dynamic'

const ClientHome = dynamic(() => import('./ClientHome'), {
  ssr: true,
  loading: () => <div>Loading...</div>,
})

export default function HomePage() {
  return <ClientHome />
}
