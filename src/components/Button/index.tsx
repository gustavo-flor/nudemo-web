import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
}

const Button = ({children, ...props}: Props) => (
  <button {...props}>{children}</button>
)

export default Button
