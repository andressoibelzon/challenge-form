import formJSON from './components/data/db.json';
import React, { useState } from 'react';
import Element from './components/Element';
import { FormContext } from './components/elements/FormContext';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, Doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { BrowserRouter, Route, Routes, Link, Switch} from "react-router-dom";
import Users from './components/elements/Users';



function App() {

  const [elements, setElements] = useState(formJSON.items);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget
    const formElements = form.elements

    let toFirebase = {};

    for (const key in elements) {
      const nameKey = elements[key].name;
      if (!nameKey) continue
      if (nameKey !== "terms_and_conditions") {
        toFirebase[nameKey] = formElements[key].value;
      }
    }
    console.log(toFirebase);


    try {
      const db = getFirestore();
      const addUser = collection(db, "users");
      const response = await addDoc(addUser, toFirebase);
      console.log("a firebase");
    } catch (error) {
      console.log(error)
    }
  }


  return (
      <div className="App">
    <FormContext.Provider>




        {/* <Link to='/'> */}
          <form className="container-fluid col-xxl-8 px-4 my-5 border rounded shadow-sm" onSubmit={handleSubmit}>
            {elements ? elements.map((field, i) =>

              <Element key={i} field={field} />)
              : null}
          </form>
    </FormContext.Provider>
        </div>
    
  );
}

export default App;
