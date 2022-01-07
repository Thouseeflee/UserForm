import {createContext, useState} from "react";

const UserFormContext = createContext()

export const UserFormProvider = ({children}) => {
    
    const [form, setForm] = useState([])

    const addUser = async (newForm) => {

        const response = await fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newForm)

        })
        const data = await response.json()

        setForm([data, ...form])
    }


    return (
        <UserFormContext.Provider value={{
            addUser
            
        }}>
            {children}
        </UserFormContext.Provider>
    )
}



export default UserFormContext
