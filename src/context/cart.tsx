import { createContext, useContext, useState } from 'react'
import { DTOProducts } from '../dtos/dtos-products'

interface CartContextProps {
  productsInCart: DTOProducts[]
  addToCart: (product: DTOProducts) => void
  removeToCart: (product: DTOProducts) => void
  getCartTotal: () => void
}

interface Props {
  children: React.ReactNode
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartProvider: React.FC<Props> = ({ children }) => {
  const [productsInCart, setProductsInCard] = useState<DTOProducts[]>([])

  function addToCart(product: DTOProducts) {
    const isProductIncart = productsInCart.find(
      (productInCart) => productInCart.id === product.id
    )

    if (isProductIncart) {
      setProductsInCard(
        productsInCart.map((productItem) =>
          productItem.id === product.id
            ? { ...productItem, quantity: productsInCart.length + 1 }
            : productItem
        )
      )
    } else {
      setProductsInCard([...productsInCart, { ...product, quantity: 1 }])
    }
  }

  function removeToCart(product: DTOProducts) {
    const isProductIncart = productsInCart.find(
      (productInCart) => productInCart.id !== product.id
    )

    if (isProductIncart) {
      setProductsInCard(
        productsInCart.map((productItem) =>
          productItem.id === product.id
            ? { ...productItem, quantity: productsInCart.length - 1 }
            : productItem
        )
      )
    }
  }

  function getCartTotal() {
    return productsInCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getCartTotal,
        removeToCart,
        productsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useProductCart(): CartContextProps {
  const context = useContext(CartContext)

  return context
}

export { CartProvider, useProductCart }
