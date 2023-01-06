import React from 'react'

const Select = ({ type, label, name, required, options }) => {
    return (
        <div className='mb-3'>
            <label for="exampleInputEmail1">{label}</label>
            <select className="form-select" required>
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
