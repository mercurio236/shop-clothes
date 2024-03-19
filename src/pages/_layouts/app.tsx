import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function AppLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '68vh' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
