import React from 'react'

const Checkbox = ({ label, name, required}) => {
    return (
        <div className='mb-3 form-check'>
            <input type="checkbox" class="form-check-input" id={name} placeholder={name}  required={required}></input>
            <label className='form-check-label' for={name}>{label}</label>
        </div>
    )
}

export default Checkbox