import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const {currentUser} = useAuth()
    const navigate = useNavigate()

  function handleAuth(){
    navigate('/login')
  }

  return (
    <div className="footerContainer">
      <div className='p-3'>
        {!currentUser ?
          <button className='btn btn-danger' onClick={() => handleAuth()}>Go To Login</button>
          :
          <Logout/>
        }
      </div>
      <footer className="text-center text-white bg-danger p-2">
      <strong>&copy; {new Date().getFullYear()} Kurtis Caldwell, All Rights Reserved.</strong>
      </footer>
    </div>
  )
}
