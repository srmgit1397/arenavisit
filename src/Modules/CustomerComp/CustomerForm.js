import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import SearchPic from '../../Pics/Icons/Search.ico'

const FormStyle={
    padding:'10px',
    direction:'rtl' , 
    textAlign:'right',
    backgroundColor:'rgb(172, 183, 204)',
    height:'auto'
}

const FBtnStyle={
    padding:'0px',
    width:'57px',
    height:'35px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)',
}

const CustomerForm=()=>{
  return(
      <div className='border rounded p-2 col-md-10  m-auto '  >
        <Form style={FormStyle} className=' m-auto ruonded-0 '>
            <Form.Group className='d-flex justify-content-between m-auto border rounded col-md-8 p-1'>  
                <h5 className=' font-weight-bolder' > مشتریان </h5>
                <div  className=" row col " style={{direction:'ltr'}} >
                  <img src={SearchPic} className="m-2" style={{height:"25px",width:'25px'}} alt="Search" />
                  <Form.Control as="select" className="input-group col-8 " />
                </div>
            </Form.Group>

            <Form.Row className='mt-2'>
                    <Form.Group controlId="formGridEmail" className='col-md-3 col-sm-6' >
                        <Form.Label>کد مشتری</Form.Label>
                        <Form.Control type="name" placeholder="شناسه " />
                    </Form.Group>
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>نام</Form.Label>
                        <Form.Control type="name" placeholder="نام " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>نام خانوادگی</Form.Label>
                        <Form.Control type="fname" placeholder="نام خانوادگی" />
                    </Form.Group>
                </Form.Row>
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>کدملی</Form.Label>
                        <Form.Control type="email" placeholder="کدملی" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>شماره شناسنامه</Form.Label>
                        <Form.Control type="password" placeholder="شماره شناسنامه" />
                    </Form.Group>
                </Form.Row>
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> تلفن ثابت </Form.Label>
                        <Form.Control placeholder="تلفن" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>شماره تلفن همراه</Form.Label>
                        <Form.Control  placeholder="موبایل" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>تاریخ تولد</Form.Label>
                        <Form.Control  placeholder="تاریخ تولد" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>محل تولد</Form.Label>
                        <Form.Control  placeholder="محل تولد" />
                    </Form.Group>
                </Form.Row>

            </Form.Row>
                <hr/>
            <Form.Row className='mt-2'>
                <Form.Row className='m-auto col-md-5'>
                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>استان</Form.Label>
                        <Form.Control as="select" defaultValue="انتخاب شود" >
                            <option>آذربایجان</option>
                            <option>همدان</option>
                            <option>اصفهان</option>
                            <option>تهران</option>
                            <option>خراسان</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>شهر</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..."  >
                            <option>تبریز</option>
                            <option>همدان</option>
                            <option>اصفهان</option>
                            <option>تهران</option>
                            <option>مشهد</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto col-md-5'>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label> منطقه شهری / شهرک</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>کدپستی</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>آدرس</Form.Label>
                <Form.Control placeholder="خیابان اصلی  ، خیابان فرعی ، کوچه" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
                <Form.Label>ادامه آدرس</Form.Label>
                <Form.Control placeholder=" پلاک ، طبقه ، واحد" />
            </Form.Group>
                <Form.Check type="checkbox" className='align-self-center ' style={{direction:'ltr'}}  label=" تائیدموارد " />

            <div className='mx-auto p-1 d-flex justify-content-center col-md-6 border rounded mt-2'>
                <Link className='nav-link text-white m-auto text-center ' to='/home'>
                    <Button variant="info" style={FBtnStyle} >لغو </Button>
                </Link>
                <Link className='nav-link text-white m-auto text-center ' to='/home'>
                    <Button variant="danger" style={FBtnStyle} >اصلاح</Button>
                </Link>
                <Link className='nav-link text-white m-auto text-center' to='/home'>
                    <Button variant="primary"  style={FBtnStyle} >ثبت </Button>
                </Link>
                <Link className='nav-link text-white m-auto text-center' to='/home'>
                    <Button variant="light"  style={FBtnStyle} >جدید</Button>
                </Link>
            </div>        
            

        </Form>
    </div>
)}

export default CustomerForm
