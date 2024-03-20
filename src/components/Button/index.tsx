import { ButtonContainer, ButtonVariant } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ButtonHTMLAttributes } from 'react'


type ButtonProps = ButtonHTMLAttributes<HTMLElement> &{
  variant?: ButtonVariant
  title?: string
  icon?: IconProp
}

export function Button({ variant = 'primary', title, icon, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      <>
        <p>{title}</p>
        <FontAwesomeIcon icon={icon as IconProp} />
      </>
    </ButtonContainer>
  )
}
