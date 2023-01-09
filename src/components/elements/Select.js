import React from 'react'

const Select = ({ type, label, name, required, options }) => {
    return (
        <div className='container mb-3'>
            <label for={name}>{label}</label>
            <select className="form-select" required={required} id={name}>
                <option>{name}</option>
                {options.length > 0 && options.map(
                    (option, i) => 
                        <option value={option.label} key={i}>
                            {option.label}</option>
                    )}
            </select>
        </div>
    )
}

export default Select
