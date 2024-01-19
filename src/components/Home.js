import React from 'react'
import {IoPersonAdd} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import './Home.css';

export default function Home() {
  const nav=useNavigate();
  return (
    <div>
      <div className='Addcus'><button  className='add' onClick={()=>nav('/addcustomer')}><IoPersonAdd /></button>
        <p>Add New Customer</p></div>
    </div>
  )
}
