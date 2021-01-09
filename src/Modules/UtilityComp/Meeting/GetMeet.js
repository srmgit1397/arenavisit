import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card,Form,Row,Button,Col} from 'react-bootstrap'
import MeetPic from './../../../Pics/Icons/Meeting.png'
import './Meeting.css'

let MeetPicStyle={
    marginTop:'5px',
    marginRight:'25px',
    width:'45px',
    cursor:'pointer',  }

const FBtnStyle={
      padding:'0px',
      width:'60px',
      height:'30px',
      marginRight:'20px',
      boxShadow:'2px 2px 3px 1px  rgba(0, 0, 0, 0.5)',
      border:'none',

  }

 
let  GetMeet=({takeMeet})=>{

  function  formSent(e) {
    e.preventDefault();
    let meetform=document.forms.sessions
    takeMeet(meetform)
    meetform.reset()
}
    return(
      <Form className='border border-secondary rounded mx-auto p-0 ' name='sessions' 
        style={{direction:'rtl'}}
        onSubmit={formSent}
      >
        <Card className=''>
          <Card.Header className='headStyle p-1' >
            <Row className='mx-auto d-flex align-items-center' style={{direction:'rtl'}} >
              <img src={MeetPic} style={MeetPicStyle} alt=''></img>
              <h5 className='mt-1 mr-2'>برنامه ملاقاتها و جلسات</h5>
            </Row>
          </Card.Header>
          <Card.Body className='contStyle p-0 text-right' >
              <Form.Row className='m-auto col-md-10 p-0 '>
                  <Form.Group as={Col} className='m-auto col-5 col-lg-3  '>
                      <Form.Label>تاریخ</Form.Label>
                      <Form.Control type="date" name='date' className='inputdata p-0 ' />
                  </Form.Group>
                  <Form.Group as={Col}  className='m-auto col-3  col-lg-3 '>
                      <Form.Label>   ساعت شروع </Form.Label>
                      <Form.Control type="time"  name='startTime' className='inputdata p-0 ' />
                  </Form.Group>
                  <Form.Group as={Col}  className='m-auto col-3  col-lg-3 '>
                      <Form.Label> ساعت پایان </Form.Label>
                      <Form.Control type="time"  name='endTime' className='inputdata p-0 ' />
                  </Form.Group>
              </Form.Row>

              <Form.Row className='mt-2 mx-auto'>
                  <Form.Row className='m-auto col-md-9 col-lg-6 '>
                      <Form.Group as={Col} className=' d-flex justify-content-right ' >
                          <Form.Label><strong>عنوان/موضوع</strong> </Form.Label>
                          <Form.Control type='text' name='title' className='inputbox text-right col'/>
                      </Form.Group>

                      <Form.Group as={Col} className=' d-flex justify-content-right col' >
                          <strong>ملاقات شونده</strong>
                          <Form.Control type='text' name='person' className='inputbox text-right col'/>
                      </Form.Group>
                  </Form.Row>

                  <Form.Row className='m-auto col-md-9 col-lg-6'>
                      <Form.Group as={Col} className=' d-flex justify-content-right' >
                          <Form.Label><strong>محل ملاقات</strong></Form.Label>
                          <Form.Control type='text' name='place' className='inputbox text-right col'/>
                      </Form.Group>

                      <Form.Group as={Col} className='d-flex justify-content-right' >
                          <Form.Label><strong>شماره تماس جهت هماهنگی</strong></Form.Label>
                          <Form.Control type='text' name='tellNum' className='inputbox col' />
                      </Form.Group>
                  </Form.Row>
              </Form.Row>
                         
                         
          </Card.Body>
          <Card.Footer className='headStyle mx-auto p-1 text-right col'>
            {/* {warning ? <strong className='text-danger mr-4'>حتما همه موارد درج شود</strong> : null} */}
              <Button type='submit' className='alert-primary '  style={FBtnStyle} >ثبت</Button>
              <Button  className='btn-danger '  style={FBtnStyle} >لغو</Button>
          </Card.Footer>
        </Card>
      </Form>
    )}
  
export default GetMeet
