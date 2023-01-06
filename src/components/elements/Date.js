import React from 'react'

const Date = (type, label, name, required) => {
    return (
        <div>
            <label for="exampleInputEmail1">Email address</label>
            <input type="date" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
    )
}

export default Date