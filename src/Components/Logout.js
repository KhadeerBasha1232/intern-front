import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div style={{marginTop : "auto" , marginBottom:"auto"}}><h1 className='text-center' >You Have Successfully Logged Out</h1><center>
      <Link className="btn btn-primary text-center my-3" to="/" role="button">Home</Link>
      </center>
      </div>
  )
}

export default Logout
