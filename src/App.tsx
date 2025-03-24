import './App.css'
import { useState } from 'react';
import { CustomForm, Button, Button2, ColorRed, Modal } from './components'
import { GlobalProvider } from './context/global.context';
import { useModalContext } from './components/modal/context/ModalContext';
//import CustomForm from './components/CustomForm/CustomForm';
//import { useFetch } from './hooks';

//const url = 'https://jsonplaceholder.typicode.com/posts';

/*interface Data {
  name: string;
  lastName: string;
  age: number;
}*/

function App() {
  const { setState } = useModalContext();
  const [count, setCount] = useState(0) //hooks (es un constructor de clase ) (state -> value, getValue{}, setValue)
  //const {data, error, loading} = useFetch<Data>(url);
  //const {data: data2, error: error2, loading: loading2} = useFetch<name: string>(url2);
  //ya es posible usar el fetch generico y controlar el dato q se espera

  const openModal = () => setState(true)
  const countMore = () => setCount((count) => count + 1)

  return (
    <GlobalProvider>
      <Modal>
        <h2>Hola</h2>
        <h3>Gargo</h3>
      </Modal>

      <Button label={`Count is ${count}`} parentMethod={countMore}/>
      
      <Button2 parentMethod={openModal}> 
        <ColorRed><div>Abrete Sésamo</div></ColorRed>
      </Button2>
      
      <CustomForm />
    </GlobalProvider>
  )
}

export default App
