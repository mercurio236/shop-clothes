import { useParams } from 'react-router-dom'
import { ContainerCart } from './styles'
import { useEffect } from 'react'
import { useProductCart } from '../../../context/cart'
import { api } from '../../../lib/axios'

export function Cart() {
  const { id } = useParams()
  const { addToCart } = useProductCart()

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
      <img src="" />
    </ContainerCart>
  )
}
