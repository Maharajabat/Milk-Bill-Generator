import React from 'react'
import './CustomerList.css'
import { useNavigate } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
export default function CustomerList() {
  const nav = useNavigate();
    const customers=[{name:"customer1",phno:1234567890,addedon:"dd/mm/yyyy"},
    {name:"customer2",phno:1234567890,addedon:"dd/mm/yyyy"},
    {name:"customer3",phno:1234567890,addedon:"dd/mm/yyyy"},
    {name:"customer4",phno:1234567890,addedon:"dd/mm/yyyy"},
    {name:"customer5",phno:1234567890,addedon:"dd/mm/yyyy"},
    {name:"customer6",phno:1234567890,addedon:"dd/mm/yyyy"},]
  return (
    <div className='customers-list'>
      <div className='cushead'>Customers List</div>
      <div className='listofcustomers'>
        <ul>{customers.map((c,i)=>(
            <><li key={i} onClick={()=>nav('/customerlist/customerbill')}>{c.name} Contact:{c.phno} Added-on:{c.addedon}</li> 
            <button className='editcustomer' onClick={()=>nav("/customerlist/updatecustomer")}><FaUserEdit/></button></> )
        )   
        }</ul>
      </div>
    </div>
  )
}
