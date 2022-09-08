import React from 'react'
import './user.css'

const User = ({ id, email, name, website, address, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className='container'>
      <span className='id'>{id}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{address}</span>
      <span>{website}</span>
      <span className='buttons'>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </span>
    </div>
  )
}

export default User
