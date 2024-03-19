import styled from 'styled-components'

export const ContainerCard = styled.main`
  width: 19.5rem;
  height: 34rem;
`

export const ImgProduct = styled.img`
  object-fit: cover;
`

export const ActionCardContent = styled.div`
  flex: 1;
  background: ${(props) => props.theme['black']};
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
  p {
    margin-top: 20px;
  }
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
