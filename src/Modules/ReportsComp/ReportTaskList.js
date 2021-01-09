import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Table} from 'react-bootstrap'

const visitTitle=['کدمشتری','نام مشتری','توضیح مدیر/سرپرست','تلفن','موبایل','نتایج قبلی','تاریخ','ساعت ورود','ساعت خروج','توضیحات','مطالبات','نتیجه']

const addVisiteRow=(idx,arrCont)=>{
    return(
    <tr>
        <td>{idx}</td>
        {arrCont.map((_,idx)=>(<td key={idx}>گزارشهای ثبت شده</td>))}
    </tr>
    )
}

const VisitTaskList=()=>{

  return(
      <div className='border rounded p-1 col-md-11  m-auto ' style={{direction:'rtl'}}>
        <Table responsive bordered hover className='mt-4'>
            <thead className='table-info'>
                <tr>
                    <th>#</th>
                    {visitTitle.map((item,index)=>(<th key={index}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {Array.from({length:4}).map((_,index)=>addVisiteRow(index+1,visitTitle))}
            </tbody>
        </Table>
    </div>
)}

export default VisitTaskList
