import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { ContainerButton, ContainerHome, ContentHome } from './styles'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export function Home() {
  return (
    <ContainerHome>
      <ContainerButton>
        <Button title="Filter" variant="secundary" icon={faFilter} />
      </ContainerButton>
      <ContentHome>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ContentHome>
    </ContainerHome>
  )
}
