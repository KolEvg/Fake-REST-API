import React from 'react'
import './user.css'

const User = ({id, email, name, website, address, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
            <span>{address}</span>
            <span>{website}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User
