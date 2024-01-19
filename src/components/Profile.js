import React from 'react'

import Popup from 'reactjs-popup';
import { TiTick } from "react-icons/ti";
import './Profile.css'
export default function Profile() {
  function  handlesubmit(e){
    e.preventDefault();
      }
  return (
    <div className='Profile'>
    
    <div className='head'>Profile</div>  
        <div className='Profile-container'>
       
        <form className="profile-form"onSubmit={handlesubmit}>
            <input placeholder='Name'></input>
            <input placeholder='Phone Number'></input>
            <input placeholder='Shop Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder=' Password'></input>
            
            <Popup 
            trigger={ <button className='Updatebtn'>Update</button>}
                ><div className='updatenotify'>
                <p className='updatetxt'>Updated Successfully</p>
                <p className='tick'><TiTick /></p>
                </div>
                </Popup>
                </form>
        </div>
        </div>
  )
}
