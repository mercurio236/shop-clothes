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
import { FilterSchemaProps, Modal } from '../../../components/Modal'

export function Home() {
  const [products, setProducts] = useState<DTOProducts[]>([])
  const [showModal, setShowModal] = useState(false)

  async function fetchProducts(data?: FilterSchemaProps) {
    try {
      if (data?.title) {
        const response = await api.get(`/products/?title=${data?.title}`)
        setShowModal(false)
        return setProducts(response.data)
      }
      if (data?.price) {
        const response = await api.get(`/products/price=${data.price}`)
        setShowModal(false)
        return setProducts(response.data)
      }
      const response = await api.get(`/products`)
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenModal() {
    setShowModal(true)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ContainerHome>
      <ContainerButton>
        <Button
          onClick={handleOpenModal}
          title="Filter"
          variant="secundary"
          icon={faFilter}
        />
      </ContainerButton>
      <ContainerGrid>
        <ContentHome>
          {products &&
            products.map((product) => {
              return <Card key={product.id} data={product} />
            })}
        </ContentHome>
      </ContainerGrid>
      <Modal
        handleCloseBackground={() => setShowModal(false)}
        openModal={showModal}
        filter={(e) => fetchProducts(e)}
        clear={fetchProducts}
      />
    </ContainerHome>
  )
}
