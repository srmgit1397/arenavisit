import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button,Form,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import SearchPic from '../../Pics/Icons/Search.ico'

const FormStyle={
    padding:'10px',
    direction:'rtl' , 
    textAlign:'right',
    backgroundColor:'rgb(172, 183, 204)',
    // borderRadius:'5px',
    height:'auto'
}

const FBtnStyle={
    width:'80px',
    height:'40px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)',
}

const OtherTaskForm=()=>{
  return(
      <div className='border rounded p-1 col-md-11  m-auto '  >
        <Form style={FormStyle} className=' m-auto ruonded-0 '>
            
        <div className='border rounded mx-auto mt-1 p-1'>
            <Form.Group as={Col} className='d-flex justify-content-between m-auto col-md-10 p-1'>  
                <h5 className=' align-self-center' > کد ماموریت </h5>
                <div  className=" row col  m-auto " style={{direction:'ltr'}} >
                    <img src={SearchPic} className="m-2" style={{height:"25px",width:'25px'}} alt="Search" />
                    <Form.Control as="select" className="input-group col-8 " />
                 </div>
            </Form.Group>
            <Form.Group as={Col} className='d-flex justify-content-between m-auto col-md-10 p-1'>  
                <h5 className=' align-self-center' > عنوان ماموریت </h5>
                {/* <div  className=" row col  m-auto " style={{direction:'ltr'}} > */}
                    <Form.Control as="select" className="input-group col-8 " />

            </Form.Group>
            <Form.Row >
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>تاریخ شروع</Form.Label>
                        <Form.Control type="date" placeholder="شروع " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>تاریخ پایان</Form.Label>
                        <Form.Control type="date" placeholder="پایان" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='mx-auto col-11 col-md-6'>
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> توضیحات مدیر/سرپرست</Form.Label>
                        <Form.Control type="email" placeholder="توضیحات" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto col-md-8'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>مطالبات</Form.Label>
                        <Form.Control type="text" placeholder="مطالبات " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>نحوه وصول</Form.Label>
                        <Form.Control as="select" placeholder="نحوه وصول " />
                    </Form.Group>
                </Form.Row>

            </Form.Row>
          </div>

          <div className='border rounded mx-auto mt-2 p-1'>
            <Form.Group className='d-flex justify-content-center m-auto col-md-10 p-1'>  
                <h5 className=' font-weight-bolder' > انتخاب فروشنده </h5>
                <div  className=" row col " style={{direction:'ltr'}} >
                  <img src={SearchPic} className="m-2" style={{height:"25px",width:'25px'}} alt="Search" />
                  <Form.Control as="select" className="input-group col-9 " />
                </div>
            </Form.Group>

            <Form.Row >
                <Form.Row className='m-auto col-md-8 ' style={{marginTop:'-20px'}}>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>کدفروشنده</Form.Label>
                        <Form.Control type="email" placeholder="کدفروشنده" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>نام</Form.Label>
                        <Form.Control type="name" placeholder="نام " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>نام خانوادگی</Form.Label>
                        <Form.Control type="fname" placeholder="نام خانوادگی" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto col-md-4 '>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> تلفن ثابت </Form.Label>
                        <Form.Control placeholder="تلفن" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>شماره همراه</Form.Label>
                        <Form.Control  placeholder="موبایل" />
                    </Form.Group>
                </Form.Row>
            </Form.Row>

            <h6 >آدرس کامل:</h6>
            <Form.Control className='scrloer mb-2 ' placeholder=" استان ، شهر ، شهرک / منطقه خیابان اصلی... " />
          </div>

            <div className='mx-auto p-4 d-flex justify-content-center col-md-6 border rounded mt-2'>
                <Link className='nav-link text-white m-auto ' to='/home'>
                    <Button variant="info" style={FBtnStyle} >لغو </Button>
                </Link>
                <Link className='nav-link text-white m-auto ' to='/home'>
                    <Button variant="danger" style={FBtnStyle} >اصلاح </Button>
                </Link>
                <Link className='nav-link text-white m-auto' to='/home'>
                    <Button variant="primary" size='sm' style={FBtnStyle} >ثبت </Button>
                </Link>
            </div>        
            
        
        </Form>
    </div>
)}

export default OtherTaskForm
