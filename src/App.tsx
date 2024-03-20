import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './context/cart'
import { ModalProvider } from 'styled-react-modal'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <GlobalStyle />
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
