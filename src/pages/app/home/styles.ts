import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: block;
  margin: 0 4vw 0 4vw;
`

export const ContainerGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentHome = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;
  margin-bottom: 20rem;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  
  margin-top: 8rem;
  margin-bottom: 30px;
`
