import React from 'react'
import './Customerbill.css'
import { useNavigate } from 'react-router-dom';
export default function Customerbill() {
  const nav=useNavigate();
  const date=new Date();
  const day=date.getDate();
  const month=date.getMonth()+1;
  const year=date.getFullYear()
    const currentdata=[{from:"01/12/2023",to:day-1+"/"+month+"/"+year,today:day+"/"+month+"/"+year,mornqty:2,evenqty:1}];
    const billdata=[{from:"06/10/2023",to:"31/10/2023",generatedon:"02/11/2023",time:"10:50AM"},
    {from:"01/09/2023",to:"30/09/2023",generatedon:"01/10/2023",time:"18:33PM"},
    {from:"01/08/2023",to:"30/08/2023",generatedon:"04/09/2023",time:"09:14AM"},
    {from:"01/07/2023",to:"30/07/2023",generatedon:"01/08/2023",time:"15:35PM"},
    {from:"01/06/2023",to:"30/06/2023",generatedon:"06/07/2023",time:"22:42PM"},]
  return (
    <div className='customerbill-container'>
      <h1>Customer's Name</h1>
      <div className='customer-bills'>
        Current Bill
        <li  className='currentbill' onClick={()=>nav('/customerlist/customerbill/billsummary')}>From:{currentdata[0].from} To:{currentdata[0].to} Today:{currentdata[0].today}</li> 
        <div className='qty-container'><label className='qtylabel'>Today's Qty:</label><label className='morn-label'>Morning:</label><input className="morning" placeholder='Enter qty' defaultValue={currentdata[0].mornqty}></input><select className='capacity-morning'><option>Litres</option><option>Millitres</option></select>
        <label className='even-label'>Evening:</label><input className="evening" placeholder='Enter qty' defaultValue={currentdata[0].evenqty}></input><select className='capacity-evening'><option>Litres</option><option>Millitres</option></select>
        <button className='qtyadd-morn'>ADD</button>
        <button className='qtyadd-even'>ADD</button>
        </div>
      <ul className='bill-list'>Previous Bills{billdata.map((b,i)=>{
            return(
             <li key={i} onClick={()=>nav('/customerlist/customerbill/billsummary')}>From:{b.from} To:{b.to} Generated-on:{b.generatedon} Time:{b.time}</li>);
        })   
        }</ul>
      </div>
    </div>
  )
}
