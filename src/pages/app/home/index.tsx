import { useEffect, useState } from 'react'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'

import {
  ContainerButton,
  ContainerGrid,
  ContainerHome,
  ContentHome,
} from './styles'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../lib/axios'
import { DTOProducts } from '../../../dtos/dtos-products'

export function Home() {
  const [products, setProducts] = useState<DTOProducts[]>([])

  async function fetchProducts() {
    try {
      const response = await api.get('/products')
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ContainerHome>
      <ContainerButton>
        <Button title="Filter" variant="secundary" icon={faFilter} />
      </ContainerButton>
      <ContainerGrid>
        <ContentHome>
          {products &&
            products.map((product) => {
              return <Card key={product.id} data={product} />
            })}
        </ContentHome>
      </ContainerGrid>
    </ContainerHome>
  )
}
