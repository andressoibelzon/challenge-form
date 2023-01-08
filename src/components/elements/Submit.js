import React from 'react'


const Submit = ({type, label}) => {
    return (
        <div className='mb-3'>
            <button type={type} class="btn btn-primary">{label}</button>
        </div>
    )
}

export default Submit