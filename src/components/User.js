import React from 'react'
import './user.css'

const User = ({id, email, name, website, address, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span className='id'>{id}</span>
            <span className='name'>{name}</span>
            <span className='email'>{email}</span>
            <span className='address'>{address}</span>
            <span className='website'>{website}</span>
            <span className='buttons'>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User
