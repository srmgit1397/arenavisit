import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './../../Pics/LogoSM.png'

const navStyle={
    backgroundColor:"rgb(107, 162, 235)",
    direction:"rtl",
    position :'sticky',
    width:'100%',
    top:"0",
    height:'72px' ,
    zIndex:'50'
}

function TopMenu() {
    return (
     <div style={navStyle}>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <img src={logo} className="logoSm" style={{height:"30px",width:'80px'}} alt="logo" />
          <Navbar.Brand>
            <Link className='nav-link text-white' to='/home'> پحش و توزیع آرنا </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link className='nav-link ' to='/home'> خانه </Link>
                <Link className='nav-link ' to='/visits' >بازدیدها</Link>
                <Link className='nav-link ' to='/misstions' >ماموریت</Link>
                <Link className='nav-link ' to='/customers' >مشتریان</Link>
                <Link className='nav-link ' to='/reports'   >گزارشات</Link>
                <NavDropdown title="امکانات" id="collasible-nav-dropdown" className='sm-col-4'>
                    <NavDropdown.Item> <Link to='/useres'>حساب کاربری</Link> </NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/'>یادداشتها</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/'>ملاقاتها</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/'>دفترتلفن</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to='/'>یادآوریها</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item> <Link to='/'>خروج</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     </div>   
     )
}

  export default TopMenu 