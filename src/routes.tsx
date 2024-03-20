import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'
import { Product } from './pages/app/product'
import { Cart } from './pages/app/cart/indx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path:'/cart/:id',
        element: <Cart/>
      }
    ],
  },
])
