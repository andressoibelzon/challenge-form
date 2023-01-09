import React from 'react'

const Date = ({label, name, required}) => {
    return (
        <div className='container mb-3'>
            <label for={name}>{label}</label>
            <input type="date" class="form-control" id={name} placeholder={label} required={required}></input>
        </div>
    )
}

export default Date