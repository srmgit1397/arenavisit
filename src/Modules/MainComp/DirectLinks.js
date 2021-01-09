import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, ButtonGroup} from 'react-bootstrap'
import './DirectLinks.css'
import {Link} from 'react-router-dom'


let linkItems = [
  [
    {Id:'l1',LTitle:'بازدیدها',Lpage:'/visits',LKey:''},
    {Id:'l2',LTitle:'ماموریت',Lpage:'/misstions',LKey:''},
    {Id:'l3',LTitle:'مسیرها',Lpage:'/paths',LKey:''},
  ],
  [
    {Id:'l4',LTitle:'مشتریان',Lpage:'/customers',LKey:''},
    {Id:'l5',LTitle:'کاربران',Lpage:'useres/>',LKey:''},
    {Id:'l6',LTitle:'گزارشات',Lpage:'/reports',LKey:''},
  ],
  [
    {Id:'l7',LTitle:'پیامها',Lpage:'/Messages',LKey:''},
    {Id:'l8',LTitle:'جلسات',Lpage:'/Meetes',LKey:''},
    {Id:'l9',LTitle:'یادداشتها',Lpage:'/Notes',LKey:''},
  ]
]

function LinkCard(nrow,ncol ){ 
  
  nrow-=1
  ncol-=1
  return(
    <Button size='md' className='rounded m-2 bg-info border-0 directLinks'>
      <Link className='nav-link text-white ' to={linkItems[nrow][ncol].Lpage}>
         {linkItems[nrow][ncol].LTitle} 
      </Link>
    </Button>
  )
}

function CreatRow(rowNumber){
  return(
    <ButtonGroup id={String(rowNumber)} className='row col ' style={{margin:'auto'}} >
        {LinkCard(rowNumber,1)}
        {LinkCard(rowNumber,2)}
        {LinkCard(rowNumber,3)}
    </ButtonGroup>
  )
}

function DirectLinks(){
    return(
      <div className=' row ' style={{margin:'0px'}} >
        {CreatRow(1)}
        {CreatRow(2)}
        {CreatRow(3)}
        
      </div>
    )
}

export default DirectLinks