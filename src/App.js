import formJSON from './components/data/db.json';
import { useState } from 'react';
import Element from './components/Element';
import { FormContext } from './components/elements/FormContext';


function App() {
  const [elements, setElements] = useState(formJSON.items);
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target)
    const form = event.currentTarget
    const formElements = form.elements
    // console.log(formElements);


    let toFirebase = {};

    for (const key in elements) {
      const nameKey = elements[key].name;
      if (!nameKey) continue 
      if (nameKey !== "terms_and_conditions" ) {
        toFirebase[nameKey] = formElements[key].value;
      }
    }
    console.log(toFirebase);
  }

  return (
    <FormContext.Provider>
      <form onSubmit={handleSubmit}>
        {elements ? elements.map((field, i) =>
          <Element key={i} field={field} />)
          : null}
      </form>
    </FormContext.Provider>
  );
}

export default App;
