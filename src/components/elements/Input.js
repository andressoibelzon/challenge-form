import React from 'react'

const Input = ({type, label, name, required}) => {
    return (

        <div className='container mb-3 mt-3'>
            <label for={name} className='form-label'>{label}</label>
            <input type={type} className="form-control" id={name}
            placeholder={name ? name : ""} 
            required={required}>
            </input>
        </div>
    )
}

export default Input