import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  background: ${(props) => props.theme['black-5']};
  height: 186px;
  padding: 2rem 12rem 2rem 12rem;
`

export const ContentLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme['stroke-gray']};
  margin: 32px 0 32px 0;
`

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextMenu = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans';
  color: ${(props) => props.theme['black']};

  &:hover {
    color: ${(props) => props.theme['primary']};
  }
`

export const BagContent = styled.div`
  display: flex;
  color: ${(props) => props.theme['black']};
  &:hover {
    color: ${(props) => props.theme['primary']};
  }
`
