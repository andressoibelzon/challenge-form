import formJSON from './components/data/db.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';


function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])
  }, [])
  const { items } = elements ?? {}
  return (
    <>
    <form>
      { formJSON.items? formJSON.items.map((field, i) => 
      <Element key={i} field={field} />)
      : null }



</form>



    </>
  );
}

export default App;
