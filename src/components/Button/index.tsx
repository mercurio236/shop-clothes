import { ButtonContainer, ButtonVariant } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ButtonHTMLAttributes } from 'react'


interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  variant?: ButtonVariant
  title?: string
  icon?: IconProp
}

export function Button({ variant = 'primary', title, icon }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>
      <>
        {title}
        <FontAwesomeIcon icon={icon as IconProp} />
      </>
    </ButtonContainer>
  )
}
