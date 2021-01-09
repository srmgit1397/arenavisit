import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Table} from 'react-bootstrap'

const taskTitle=['کدبرنامه','عنوان برنامه','توضیح مدیر/سرپرست','کدفروشنده ','موبایل','تاریخ','ساعت ورود','ساعت خروج','نتیجه','توضیحات']

const addTableRow=(idx,arrCont)=>{
    return(
    <tr>
        <td>{idx}</td>
        {arrCont.map((_,idx)=>(<td key={idx}>Table cell {idx+1}</td>))}
    </tr>
    )
}

const OtherTaskList=()=>{

  return(
      <div className='border rounded p-1 col-md-11  m-auto ' style={{direction:'rtl'}}>
        <Table responsive bordered hover className='mt-4'>
            <thead className='table-info'>
                <tr>
                    <th>#</th>
                    {taskTitle.map((item,index)=>(<th key={index}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {Array.from({length:4}).map((_,index)=>addTableRow(index+1,taskTitle))}
            </tbody>
        </Table>
    </div>
)}

export default OtherTaskList
