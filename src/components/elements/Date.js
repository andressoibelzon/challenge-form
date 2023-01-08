import React from 'react'

const Date = ({type, label, name, required}) => {
    return (
        <div>
            <label for={name}>{label}</label>
            <input type="date" class="form-control" id={name} placeholder={label} required={required}></input>
        </div>
    )
}

export default Date