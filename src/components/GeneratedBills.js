import React from 'react'
import './GeneratedBills.css'
import { useNavigate } from 'react-router-dom'
export default function GeneratedBills() {
  const nav=useNavigate();
    const billdata=[{cname:"customername" ,from:"06/10/2023",to:"31/10/2023",generatedon:"02/11/2023",time:"10:50AM"},
    {cname:"customername" ,from:"01/09/2023",to:"30/09/2023",generatedon:"01/10/2023",time:"18:33PM"},
    {cname:"customername" ,from:"01/08/2023",to:"30/08/2023",generatedon:"04/09/2023",time:"09:14AM"},
    {cname:"customername" ,from:"01/07/2023",to:"30/07/2023",generatedon:"01/08/2023",time:"15:35PM"},
    {cname:"customername" ,from:"01/06/2023",to:"30/06/2023",generatedon:"06/07/2023",time:"22:42PM"},]
    return (
    <div className='generated-bills'>
      <ul>
        <h1>Recently Generated Bills</h1>
        {billdata.map((bill)=>{
          return(
        <li onClick={()=>nav('/generatedbills/billsummary')}>{bill.cname} From:{bill.from} To:{bill.to} Generated-on:{bill.generatedon}--{bill.time}</li>  
       ) })}
      </ul>
    </div>
  )
}
