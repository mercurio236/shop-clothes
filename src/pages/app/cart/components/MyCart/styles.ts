import styled from 'styled-components'

export const ContainerMyCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const ContentMyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    p {
      display: none;
    }
  }
`

export const BodyProductAndImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const ImgProductMyCart = styled.img`
  border: 1px solid ${(props) => props.theme['stroke-gray']};
  border-radius: 15px;
  object-fit: cover;
  width: 58px;
  height: 70px;
`
export const TitleMyCart = styled.p`
  font-weight: 700;
  font-size: 12px;
  width: 12rem;
  word-break: break-all;
`

export const ContainerButtonQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid ${(props) => props.theme['stroke-gray']};
  padding: 20px;
  height: 40px;
  border-radius: 5px;
`

export const QuantityProduct = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`

export const ButtonPlus = styled.button`
  all: unset;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme['black-5']};
  }

  &:disabled {
    color: ${(props) => props.theme['dark-10']};
    cursor: not-allowed;
  }
`

export const ButtonLess = styled.button`
  all: unset;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['black-5']};
  }

  &:disabled {
    color: ${(props) => props.theme['dark-10']};
    cursor: not-allowed;
  }
`

export const PriceMyCart = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme['dark-50']};
`
