import React, { useState } from 'react'
import { IoHome,IoReceipt} from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdPersonSearch } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import './Outline.css';
export default function Outline() {
  const nav=useNavigate();
  const [logout,setlogout]=useState(false);
  return (
      <>
        <div className='homehead'>
            <h1 onClick={()=>nav('/home')}>Milk Bill Generator</h1>
            <h2 onClick={()=>{setlogout(true)}}>UserName</h2>
            {logout&&(
              <div>
            <button className='logout' onClick={()=>{nav('/') ;setlogout(false)}}>Logout</button>
            </div>
            )}
        </div>
        <div className='searchbtn'>
        <input className='search' placeholder='Search'></input><button id='searchicon'><MdPersonSearch /></button></div>
        <div className='pagebutton'>
            <button className='home' onClick={()=>{nav('/home')}}><IoHome/></button>
            <button className='customer'onClick={()=>{nav('/customerlist')}} ><IoIosPeople /></button>
            <button className='bill' onClick={()=>{nav('/generatedbills')}}><IoReceipt /></button>
            <button className='profile' onClick={()=>{nav('/profile')}}><CgProfile /></button>
        </div>
        
      </>
  )
}
