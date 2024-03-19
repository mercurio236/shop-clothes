import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['black']};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
`

export const FooterText = styled.p`
  color: ${(props) => props.theme['white']};
  font-size: 16px;
  font-weight: 400;
`
