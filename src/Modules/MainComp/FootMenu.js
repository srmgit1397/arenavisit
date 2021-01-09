import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

const navStyle={
    backgroundColor:"rgb(107, 162, 235)",
    direction:"rtl",
    position :'sticky',
    height: '50px',
    width:'100%',
    bottom:"0",
    // zIndex:'10'
}


function FootMenu() {
    return (
        <div className="navbar navbar-expand bg-primary " style={navStyle} >
            <ul className='navbar-nav ml-auto sticky-bottom'>
                <Link className='nav-link text-white' to='/home'> خانه </Link>
                <Link className='nav-link text-white' to='/visits' >بازدیدها</Link>
                <Link className='nav-link text-white' to='/misstions' >ماموریت</Link>
                <Link className='nav-link text-white' to='/customers' >مشتریان</Link>
                <Link className='nav-link text-white' to='/reports'   >گزارشات</Link>
                <Link className='nav-link text-white' to='/Meetes'   >جلسات</Link>
            </ul>   
        </div>
    )
}

  export default  FootMenu