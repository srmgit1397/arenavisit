import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Table} from 'react-bootstrap'

const visitMisstion=['شماره برنامه','کدمسیر','نام مسیر','کد فروشنده','نام فروشنده','شماره تماس','از تاریخ','تا تاریخ']

const addVisiteRow=(idx,arrCont)=>{
    return(
    <tr>
        <td>{idx}</td>
        {arrCont.map((_,idx)=>(<td key={idx}>گزارشهای ثبت شده </td>))}
    </tr>
    )
}

const VisitMisstions=()=>{

  return(
      <div className='border rounded p-1 col-md-11  m-auto ' style={{direction:'rtl'}}>
        <Table responsive bordered hover>
            <thead>
                <tr className='table-primary'>
                    <th>#</th>
                    {visitMisstion.map((item,index)=>(<th key={index}>{item}</th>))} 
                </tr>
            </thead>
            <tbody>
                {Array.from({length:2}).map((_,index)=>addVisiteRow(index+1,visitMisstion))} 
            </tbody>
        </Table>
    </div>
)}

export default VisitMisstions
