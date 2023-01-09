import React from 'react'

const Checkbox = ({ label, name, required}) => {
    return (
        <div className='container mb-3'>
            <input type="checkbox" class="form-check-input" id={name} placeholder={name}  required={required}></input>
            <label className='form-check-label mx-2' for={name}>{label}</label>
        </div>
    )
}

export default Checkbox