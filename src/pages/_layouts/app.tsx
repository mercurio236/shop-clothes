import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function AppLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
