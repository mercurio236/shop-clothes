import { Button } from '../../../components/Button'
import { ContainerButton, ContainerHome, ContentHome } from './styles'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export function Home() {
  return (
    <ContainerHome>
      <ContainerButton>
        <Button title="Filter" variant="secundary" icon={faFilter} />
      </ContainerButton>
      <ContentHome>
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
        <div style={{ background: '#000', width: 312, height: 478 }} />
      </ContentHome>
    </ContainerHome>
  )
}
