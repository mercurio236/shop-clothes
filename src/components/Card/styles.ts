import styled from 'styled-components'

export const ContainerCard = styled.main`
  display: flex;
  flex-direction: column;
`

export const ImgProduct = styled.img`
  object-fit: cover;
  max-height: 21.7vw;
  max-width: 27.8vw;
`

export const ActionCardContent = styled.div`
  background: ${(props) => props.theme['black']};
  max-height: 21.7vw;
  max-width: 27.8vw;
  display: flex;
  justify-content: flex-end;
`

export const ButtonAction = styled.button`
  all: unset;

  color: ${(props) => props.theme['white']};
  display: flex;
  gap: 8px;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
  }

  &:hover {
    color: ${(props) => props.theme['primary']};
    cursor: pointer;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  span {
    font-weight: 600;
  }
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;

  p {
    &:first-child {
      color: ${(props) => props.theme['dark-50']};
    }
    &:last-child {
      color: ${(props) => props.theme['dark']};
      font-weight: 600;
      font-size: 16px;
      font-family: 'Open Sans';
    }
  }
`
