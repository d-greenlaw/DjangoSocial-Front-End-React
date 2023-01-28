import React from 'react'
import { Link } from 'react-router-dom'

const AddPostButton = () => {
  return (
    <Link to="/post/new" className='btn btn-primary'>
      +
    </Link>
  )
}

export default AddPostButton
