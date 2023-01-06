import React from 'react'
import Input from './elements/Input';
import Date from './elements/Date';
import Select from './elements/Select';
import Checkbox from './elements/Checkbox';
import Submit from './elements/Submit';


const Element = ({ field: { type, label, name, options, required } }) => {

    switch (type) {
        case "text":
            return (<Input
                label={label}
                name={name}
                required={required}
                />)
        case "email":
            return (<Input
                label={label}
                name={name}
                required={required}
                />)
        case "date":
            return (<Date
                label={label}
                name={name}
                required={required}
                />)
        case "select":
            return (<Select
                label={label}
                name={name}
                required={required}
                options={options}
                />)
        case "checkbox":
            return (<Checkbox
                label={label}
                name={name}
                required={required}
                />)
        case "submit":
            return (<Submit
                label={label}
                />)

        default:
            return null;
    }
}

export default Element