import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'default'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = (variant: ButtonVariant) => {
  return {
    primary: css`
      background-color: ${({ theme }) => theme['primary']};
      color: ${({theme}) => theme['white']};
    `,
    secundary: css`
      background-color: ${({ theme }) => theme['black']};
      color: ${({theme}) => theme['white']};
      cursor: pointer;
      transition: 0.3s;
      &:hover{
        background-color: ${({theme}) => theme['primary']};
        cursor: pointer;
      }
    `,
    default: css`
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;
      &:hover{
        background-color: ${({theme}) => theme['black-5']} ;
      }

    `,
  }[variant]
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.8rem;
  gap: 10px;

  ${({ variant }) => buttonVariants(variant)}
`
