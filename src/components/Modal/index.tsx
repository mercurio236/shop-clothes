import { ButtonClose, ContainerButton, Form, Input, StyledModal, TitleModal } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'
import { faBroom, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ModalProps = {
  openModal: boolean
  handleCloseBackground: () => void
  filter: (data: FilterSchemaProps) => void
  clear: () => Promise<void>
}

const filterSchema = z.object({
  title: z.string().optional(),
  price: z.coerce.number().optional(),
})

export type FilterSchemaProps = z.infer<typeof filterSchema>

export function Modal({
  openModal,
  handleCloseBackground,
  filter,
  clear,
}: ModalProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<FilterSchemaProps>({
    resolver: zodResolver(filterSchema),
  })

  function handleFilter(data: FilterSchemaProps) {
    filter(data)
  }

  function handleClearFilter() {
    clear()
    reset()
  }

  return (
    <StyledModal isOpen={openModal} onBackgroundClick={handleCloseBackground}>
        <ButtonClose onClick={handleCloseBackground}>
            <FontAwesomeIcon icon={faClose}/>
        </ButtonClose>
      <TitleModal>Filtro</TitleModal>
      <Form onSubmit={handleSubmit(handleFilter)}>
        <Input
          placeholder="Pesquisar por titulo"
          type="text"
          {...register('title')}
        />
        <Input
          placeholder="Pesquisar por preço"
          type="number"
          {...register('price')}
        />
        <ContainerButton>
          <Button
            disabled={isSubmitting}
            onClick={handleClearFilter}
            icon={faBroom}
            type="button"
            title="Limpar"
          />
          <Button
            disabled={isSubmitting}
            icon={faSearch}
            type="submit"
            variant="secundary"
            title="Filtrar"
          />
        </ContainerButton>
      </Form>
    </StyledModal>
  )
}
