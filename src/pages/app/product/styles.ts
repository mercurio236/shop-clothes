import styled from 'styled-components'

export const ContainerProduct = styled.main`
  margin: 5rem 12rem 5rem 12rem;
  margin-bottom: 16rem;
`

export const ContentProduct = styled.div`
  display: flex;
  gap: 50px;
  
`

export const ImageProduct = styled.img`
  object-fit: contain;
  width: 381px;
  height: 407px;
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
   

  p {
    font-size: 37px;
    margin-bottom: 10px;
  }
  span {
    font-size: 26px;
    margin-bottom: 20px;
  }
  button {
    width: 180px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    p {
      font-size: 29px;
    }
  }
`

export const InformationProduct = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`
