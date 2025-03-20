import "./button.css"

interface Props {
  label: string,
  parentMethod: () => void
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