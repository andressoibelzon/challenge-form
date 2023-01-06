import React from 'react';
import db from './data/db.json';
// import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';


// console.log(db)
// console.log(db.items)


// db.items.map(x => console.log(x.label))


const Main = () => {
    return (
        <>
            {db.items.map(item => {
                return (
                    <div className='container-fluid py-4 border border-primary' key={item.label}>

                    <div>
                        {item.options && item.options.map(e => (
                            <div key={item.label}>
                                {e.label}
                            </div>
                        ))}
                    </div>

                        <form>
                            <div class="form-group">
                                <label for="answers" className='px-3'>
                                    <div className=''>{item.label}</div>
                                </label>
                                <input
                                    type={item.type}
                                    class="form-control"
                                    id="answers"
                                    placeholder={item.name}
                                    required={item.required} // no estoy seguro si es correcto
                                ></input>
                            </div>
                        </form>
                    </div>
                )
            })}
        </>
    )
}

export default Main