import React from 'react'
import './user.css'

const User = ({id, email, name, website, address, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='container'>
          <div className='list'>
            <span>{id}</span>
          </div>
          <div className='list'>
            <span>{name}</span>
          </div>
          <div className='list'>
            <span>{email}</span>
          </div>
          <div className='list'>
            <span>{address}</span>
          </div>
          <div className='list'>
            <span>{website}</span>
          </div>
            <span className='buttons'>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User
