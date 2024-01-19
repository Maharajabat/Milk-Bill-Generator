import React from 'react'
import Popup from 'reactjs-popup';
import { TiTick } from "react-icons/ti";
import { FaRupeeSign } from "react-icons/fa";
export default function UpdateCustomer() {
    var priceicon=<FaRupeeSign />;
    function  handlesubmit(e){
        e.preventDefault();
          }
  return (
    <div className='Addcustomer'>
    <h1 className='head'>UPDATE CUSTOMER</h1>
   <div className='AddCustomer-container'>
  
     <form className="customer-details" onSubmit={handlesubmit}>
         <input className="name" placeholder='Customer Name'></input>
         <input className="no" placeholder='Phone Number'></input>
         <input className="email" type="email" placeholder='Email'></input>
         <div>
           <label className='morninglabel'>Morning:</label>
         <input className="morning-qty" type='number' placeholder='Qty'></input>
         <select className='morn-capacity'>
             <option>Litres</option>
             <option>Millilitres</option>
         </select>
         <label className='eveninglabel'>Evening:</label>
         <input className="evening-qty" type='number' placeholder='Qty'></input>
         <select className='even-capacity'>
             <option>Litres</option>
             <option>Millilitres</option>
         </select>
         </div><div><label className='fromdate'>From Date: </label><input className="date" type='date'></input>
         <input className="price" placeholder='Price '></input>{priceicon}/ L or ml</div>
     
         <Popup 
         trigger={ <button className='updatebtn'>Update</button>}
             ><div className='addnotify'>
             <p className='addstatus'>Customer Updated Successfully</p>
             <p className='tick'><TiTick /></p>
             </div>
         </Popup>
     </form>
     </div>
 </div>
  )
}
