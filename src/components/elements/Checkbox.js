import React from 'react'

const Checkbox = ({type, label, name, required}) => {
    return (
        <div className='mb-3 form-check'>
            <input type="checkbox" class="form-check-input" id="exampleCheck1" placeholder={name} value={name} required></input>
            <label className='form-check-label' for="exampleCheck1">{label}</label>
        </div>
    )
}

export default Checkbox