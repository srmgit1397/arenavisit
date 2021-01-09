import React , {useContext } from 'react'
import AppContext from './AppContext'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Button,Col} from 'react-bootstrap'
import logo from './Pics/ArenaToolPic.png'
import './FirstFrame.css'

const FormStyle={
    padding:'10px',
    direction:'rtl' , 
    textAlign:'right',
    borderRadius:'5px'
}
    
const BtnStyle={
    margin:'auto',
    padding:'0px',
    width:'60px',
    height:'35px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)'
}
let user , pass =''
// let pass=''

function LoginPage() {
    
    const appCont =useContext(AppContext)

    // let authentication=()=>(user==='admin' && pass==='admin' ) ? appCont.login() : appCont.logout()
    // let authentication=()=> appCont.login() 
    let authentication=false 
    return (
        <div className="firstFrame">
            <img src={logo} className="firstlogo" alt="logo" />
            <h2> برنامه بازدید فروشندگان آرنا </h2>
            {/* <Form style={FormStyle} onSubmit={authentication}> */}
            <Form style={FormStyle} onSubmit={()=>appCont.login()}>
                <Form.Group as={Col} controlId="userName">
                    <Form.Label> نام کاربری </Form.Label>
                    <Form.Control type="name" placeholder="نام " onChange={(e)=>user=e.target.value} />
                </Form.Group>
                <Form.Group as={Col} controlId="loginPassword">
                    <Form.Label>کلمه عبور</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={e => pass=e.target.value} />
                </Form.Group>
                <Form.Group id="loginBtns">
                <Form.Row className='mx-auto'>
                    <Button variant="primary" type="submit" style={BtnStyle} className='btn-success'  >
                        ورود
                    </Button>
                    <Button variant="primary" style={BtnStyle} className='btn-danger'>
                        خروج
                    </Button>
                </Form.Row>
                </Form.Group>
            </Form>
                    
                    {
                        authentication 
                        ? null 
                        : <p>نام کاربری یا کلمه عبور صحیح نیست</p>
                    }
                   
                    
        </div>
    )
}

  export default LoginPage 