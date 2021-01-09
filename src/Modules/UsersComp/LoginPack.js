import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col,Button} from 'react-bootstrap'
import App from './../../../AppFrame'

const FormStyle={
        padding:'10px',
        direction:'rtl' , 
        textAlign:'right',
        borderRadius:'5px'
    }
        
const FBtnStyle={
    margin:'auto',
    padding:'0px',
    width:'60px',
    height:'35px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)'
}


function LoginPack(){
    return(
        <Form style={FormStyle}>
            <Form.Group as={Col} controlId="userName">
                <Form.Label> نام کاربری</Form.Label>
                <Form.Control type="name" placeholder="نام " />
            </Form.Group>
            <Form.Group as={Col} controlId="loginPassword">
                <Form.Label>کلمه عبور</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group id="loginBtns">
              <Form.Row  className='mx-auto' >
                 <Button variant="primary" type="submit" style={FBtnStyle} onClick={()=><App/>} >ورود</Button>
                 <Button variant="primary" type="submit" style={FBtnStyle} >خروج</Button>
              </Form.Row>
            </Form.Group>
        </Form>
    )
}


export default LoginPack