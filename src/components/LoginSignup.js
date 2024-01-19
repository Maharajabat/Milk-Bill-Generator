import React from 'react'
import "./LoginSignup.css"
import { useNavigate } from 'react-router-dom'
export default function LoginSignup() {
  const nav=useNavigate();
  return (
    <div className='Entry'>
      <div className='Login'>
        <form className='login-form' >
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='password'></input>
            <button onClick={()=>nav('/home')}>Login</button>
        </form>
      </div>
      <div className='Signup'>
        <form className='signup-form' >
            <input  placeholder='UserName' required></input>
            <input  placeholder='PhoneNumber' required></input>
            <input type='email' placeholder='Email' required></input>
            <input type='password' placeholder='Create New password' required></input>
            <input type='password' placeholder='Confirm Password' required></input>
            <button>Signup</button>
        </form>
      </div>
    </div>
  )
}
