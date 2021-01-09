import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Alert } from 'react-bootstrap'
import MessagIcon from './../../Pics/Icons/Message.ico'

let alertIconStyle={
    marginTop:'5px',
    marginRight:'25px',
    width:'55px',
    cursor:'pointer',
}

let messagTitle='قابل توجه همکاران واحد فروش'
let messagText='با توجه فرا رسیدن پایان سال و دوره سال مالی لطفا نسبت به جمع آوری مطالبات باقیمانده و بستن حساب مشتریان اقدام فرمائید '
let messagSign='با احترام مدیریت آرنا'

function MessageAlert() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <div style={{textAlign:'right',margin:'3px'}} >
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{messagTitle}</Alert.Heading>
            <p><hr/>{messagText}<hr/></p>
            <p className='font-weight-bold'>{messagSign} </p>
          </Alert>
        </div>
      );
    }
    return(<img src={MessagIcon} style={alertIconStyle} onClick={()=> setShow(true) }alt='Show'></img>)
  }
  
export default  MessageAlert ;