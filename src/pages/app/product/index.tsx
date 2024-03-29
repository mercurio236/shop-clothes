import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../../lib/axios'
import {
  ContainerInfo,
  ContainerProduct,
  ContentProduct,
  ImageProduct,
  InformationProduct,
} from './styles'
import { useEffect, useState } from 'react'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { DTOProducts } from '../../../dtos/dtos-products'
import { Button } from '../../../components/Button'

export function Product() {
  const navigate = useNavigate()
  const params = useParams()
  const { id } = params

  const [product, setProduct] = useState({} as DTOProducts)

  async function fetchProuct() {
    try {
      const response = await api.get(`/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleAddProductInTheCart(productId: number) {
    if(productId){
      navigate(`/cart/${productId}`)
    }
  }

  useEffect(() => {
    fetchProuct()
  }, [id])

  return (
    <ContainerProduct>
      <ContentProduct>
        <ImageProduct src={product.category?.image} />
        <ContainerInfo>
          <p>{product?.title}</p>
          <span>
            {product.price?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <InformationProduct>{product?.description}</InformationProduct>
          <Button
            onClick={() => handleAddProductInTheCart(product.id)}
            title="Shop Now"
            icon={faBagShopping}
          />
        </ContainerInfo>
      </ContentProduct>
    </ContainerProduct>
  )
}
