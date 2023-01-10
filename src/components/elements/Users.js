import React from 'react'
import { useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Users = ({Provider}) => {

    const [users, setUsers] = useState([])

    //captar datos de firebase
    const Users = () => {
        console.log("get users")

        // hacer lo que hiciste en products 
        const db = getFirestore()
        const Collection = collection(db, 'users')
        return getDocs(Collection).then((snapshot) => {
            const usersList = []
            snapshot.docs.forEach((s) => {
                usersList.push({ full_name: s.full_name, ...s.data() })
            })
            console.log(usersList)

            setUsers(usersList); // guardamos los products
        })
    }

    return (
        <Provider value={{Users}}>

        <div>{ users.map (p => <li> {p.full_name} </li>)}</div>
        </Provider>

    )
}

export default Users

