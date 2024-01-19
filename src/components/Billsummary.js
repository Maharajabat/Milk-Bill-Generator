import React, { useRef } from 'react'
import './BillSummary.css'
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
export default function Billsummary() {
  const date=Date();
  const billpdf=useRef();
  const pdf = useReactToPrint({
    content :()=>billpdf.current,
    documentTitle:"Customer Name From:dd/mm/yyy To:dd/mm/yyyy"
  })
  const [rows, setRows] = useState([
    { date: '', morning: 0, evening: 0, price: 0 ,total:function add(){return (0);}},
  ]);

  const addingRow = () => {
    const newRow = { date: '', morning: 0, evening: 0, price: 0 ,total:()=>{return (rows.morning+rows.evening);}};
    setRows([...rows, newRow]);
  };

  const deletingRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };


  return (
    <>
    <div ref={billpdf} className='billsummary'>
      <div className='billhead'>
      <h1>User Name</h1>
        <div className='user-det'>
        <h2>User Shop Name</h2>
        <h3>User Phone Number</h3>
        <h4>User Emailid</h4>
        </div>
       <div className='customer-det'> 
        <h2>Customer Name</h2>
        <h3>Customer Phone Number</h3>
        <h4>Customer Emailid</h4>
        </div>
        <strong className='generatedate'>Bill Generated on {date}</strong>
      </div>
      <hr className='line'></hr>
      
      <table className='billtable'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Morning</th>
          <th>Evening</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <input id='date'
                type='date'
              />
            </td>
            <td>
              <input
                type='text'
               
              />
            </td>
            <td>
              <input
                type='text'
               
              />
            </td>
            <td>
              <input
                type='text'
                
              />
            </td>
            <td>{row.morning}</td>
            <td style={{border:'none'}}>
                <button className='addrow' onClick={addingRow}>
                  <IoMdAdd />
                </button>
                <button className='deleterow' onClick={() => deletingRow(index)}>
                  <MdDelete />
                </button>
            
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      <div className='totalamount'>
      <li className='tamount'>Total Amount : <strong id='totalamount'></strong></li>
      <li className='delivery'>Delivery Convenience :<input id='convenience'></input></li> 
      <li className='pay'>To be Paid : <strong id='topay'></strong></li>
      </div>
    </div>
    <div className='pdfbuttons'>
    <button className='download' onClick={pdf}>Download</button>
    <button className='sendbill'>Send to Customer</button>
    </div>
    </>
   
  )
}
