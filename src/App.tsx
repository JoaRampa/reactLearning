import './App.css'
import { useState } from 'react';
import { Button, Button2, ColorRed } from './components'
//import { useFetch } from './hooks';

//const url = 'https://jsonplaceholder.typicode.com/posts';

/*interface Data {
  name: string;
  lastName: string;
  age: number;
}*/

function App() {
  const [count, setCount] = useState(0) //hooks (es un constructor de clase ) (state -> value, getValue{}, setValue)
  //const {data, error, loading} = useFetch<Data>(url);
  //const {data: data2, error: error2, loading: loading2} = useFetch<name: string>(url2);
  //ya es posible usar el fetch generico y controlar el dato q se espera

  const countMore = () => setCount((count) => count + 1)
  const handleClick = () => console.log("click")

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
      <Button2 parentMethod={handleClick}> 
        <ColorRed><div>my label</div></ColorRed>
      </Button2>
    </>
  )
}

export default App
