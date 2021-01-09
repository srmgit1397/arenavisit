import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card,Form,Row,Button} from 'react-bootstrap'
import notePice from './../../../Pics/Icons/Message.ico'
import userPice from './../../../Pics/Icons/user32.png'


 let notePiceStyle={
      marginTop:'5px',
      marginRight:'25px',
      width:'45px',
      cursor:'pointer',
    }

let Message=()=>{
    const [message,setMessage]=useState([])
    const [text,setText]=useState('')
    const [recipter,setRecipter]=useState('')

    let inputRecipient=e=>setRecipter(e.target.value)

    let inputMessage=e=> setText(e.target.value)
    
    let AddMessage=(recipter,text)=>{
      if( recipter && text ) { 
      setMessage([...message,{recipter,text,messageId:Date.now(),showing:true}])
      setText('')
      }else{(console.log('گیرنده و پیام درج گردد'))}
    }

  let ShowMessag=({fitem})=>{
    return(
      <Card className='m-2 col-10 p-0 '>
        <Card.Header className='p-0'><strong className='p-1 mr-1'>{fitem.recipter}</strong></Card.Header>
        <Card.Body className='p-1 m-1'>{fitem.text}</Card.Body>
      </Card>
    )
  }

  let Recipter=()=>{
    return(
      <>
        <img src={userPice} style={{height:"35px"}} alt='users'></img>
        <Form.Control  
          className='text-right col-10 mr-1 ' 
          id='recipient'
          type="text" 
          value={recipter}
          as="select"
          placeholder="گیرنده پیام"
          onChange={inputRecipient}
        >
          <option placeholder='' ></option>
          {Array.from({length:10}).map((item,index)=>
            <option className='p-2 ' >
              {index+1}-{`مخاطب${index+1} `}
            </option>)
          }
        </Form.Control>
      </>
  )}

  
  let MesssagInput=()=>{
    return(
      <>
      <Form.Control style={{height:'80px'}} 
          className='text-right align-top mt-1 ' 
          id='textmessage'
          type="text" 
          as="textarea"
          value={text}
          placeholder="تایپ پیام "
          onChange={inputMessage}
          />
      </>
    )
  }

   return(
    <div id='notePage' className='mx-auto p-1 col-11 col-md-8 mt-2 text-right rounded' >
        <Card style={{direction:'rtl', padding:'0px'}}>
          <Card.Header className='alert-primary p-1' >
            <Row className='mx-auto d-flex align-items-center'  >
              <img src={notePice} style={notePiceStyle} alt='message' ></img>
              <h5 className='m-2'>پیام رسان</h5>
            </Row>
          </Card.Header>
          <Card.Body className='alert-info p-1 d-flex align-items-center' >
            <Row className='mx-auto col'>
                <Row className='mx-auto col-10 col-md-4 d-flex m-1' style={{height:'40px'}}>
                    <Recipter />
                </Row>
                <Row className='mx-auto col-12 col-md-8 p-0 '>   

                <div id='message'className='mx-auto text-right align-text-top mt-1 alert-dark overflow-auto p-2 col rounded' 
                     style={{height:'350px'}}
                >
                    {message.map((item,index)=><ShowMessag fitem={item} key={item.messageId} />)}
                    
                </div>  

                {MesssagInput()}

                </Row>
            </Row>
          </Card.Body>
          <Card.Footer className='alert-primary mx-auto p-1 col'>
              <Button className='btn btn-info' style={{}} onClick={()=>AddMessage(recipter,text)}>ارسال پیام</Button>
          </Card.Footer>
        </Card>
    </div>
)}

export default Message
