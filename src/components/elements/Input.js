import React from 'react'

const Input = ({type, label, name, required}) => {
    return (
        <div className='mb-3'>
            <label for="exampleInputEmail1" className='form-label'>{label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" 
            placeholder={name ? name : ""} 
            // value
            required>
            </input>
        </div>
    )
}

export default Input