import { JSX, ReactNode } from "react"
import "./button.css"

interface Props {
  label: string,
  parentMethod: () => void
}
interface Props2 {
  children: ReactNode,
  parentMethod: () => void
}
interface ChildrenProps {children: JSX.Element}

//logica de poner el texto en color rojo, logica minima posible para cambiar las cosas al color
export const ColorRed = ({children}: ChildrenProps) => {
  return (<div style={{"color": "red"}}>{children}</div>)
}

//destrucutracion para atomizar el button a su menor expresion
//emitimos un evento del hijo al padre
export const Button = ({label, parentMethod}: Props) => {
  return (
    <button className='custom-button' onClick={parentMethod}>
      {label}
    </button>
  )
}  
export const Button2 = ({children, parentMethod}: Props2) => {
  return (
    //composition pattern
    <button className='custom-button' onClick={parentMethod}>
      {children}
    </button>
  )
}