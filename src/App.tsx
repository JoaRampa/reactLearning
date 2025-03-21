import './App.css'
import { useState } from 'react';
import { Button } from './components'
import { useFetch } from './hooks';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0) //hooks (es un constructor de clase ) (state -> value, getValue{}, setValue)
  const {data, error, loading} = useFetch<Data>(url);

  const countMore = () => {
    setCount((count) => count + 1)
  }
  
if(loading) {
  return <div>Cargando...</div>
}

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
    </>
  )
}

export default App
