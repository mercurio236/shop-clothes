import { useParams } from 'react-router-dom'
import {
  ContainerCart,
  ContainerValueTotal,
  TitleCart,
  Total,
  ValueTotal,
} from './styles'
import { useEffect } from 'react'
import { useProductCart } from '../../../context/cart'
import { api } from '../../../lib/axios'
import { MyCart } from './components/MyCart'
import { CartEmpty } from './components/CartEmpty'

export function Cart() {
  const { id } = useParams()
  const { addToCart, productsInCart, getCartTotal } = useProductCart()
  const TOTAL = getCartTotal()

  async function fetchGetProduct(productId: string) {
    try {
      const response = await api(`products/${productId}`)
      addToCart(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!id) return
    fetchGetProduct(id)
  }, [id])

  return (
    <ContainerCart>
      <TitleCart>Meu Carrinho</TitleCart>
      {productsInCart.length <= 0 && <CartEmpty/>}
      {productsInCart &&
        productsInCart.map((product) => {
          return <MyCart key={product.id} data={product} />
        })}
      <ContainerValueTotal>
        <Total>Total</Total>
        <ValueTotal>
          {Number(TOTAL).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </ValueTotal>
      </ContainerValueTotal>
    </ContainerCart>
  )
}
