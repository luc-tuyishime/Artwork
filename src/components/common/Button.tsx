import React, { ReactNode } from 'react'
import { BtnStyle } from '../NavBar/NavBarStyle'

interface Props {
  children: ReactNode
  onClick?: () => void
}
const Button: React.FC<Props> = ({ children, onClick }) => {
  return <BtnStyle onClick={onClick}>{children}</BtnStyle>
}

export default Button
