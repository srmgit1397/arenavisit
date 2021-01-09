import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FBtnStyle={
    padding:'0px',
    width:'55px',
    height:'35px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)',
}

const Paths=()=>{
  return(
      <div className='p-2 text-right bg-transparent ' style={{direction:'rtl' }} >
        <Form className='border rounded mt-3 col-md-11  mx-auto ' >
          <h4 className='mx-auto mt-2 border text-center col col-md-4 rounded p-1'>ثبت مسیرها</h4>
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail" className='m-auto col-md-3'>
                        <Form.Label>کد مسیر</Form.Label>
                        <Form.Control type="name" placeholder="شناسه " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className='m-auto col-md-3'>
                        <Form.Label> نام مسیر</Form.Label>
                        <Form.Control type="name" placeholder="نام " />
                    </Form.Group>
                </Form.Row>
            <Form.Row className='mt-2 mx-auto'>
                <Form.Row className='m-auto col-md-6 col-lg-4'>
                    <Form.Group as={Col} controlId="formGridState"  >
                        <Form.Label>استان</Form.Label>
                        <Form.Control as="select"  defaultValue="Choose..."  >
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
                        <Form.Control as="select" defaultValue="Choose..."   >
                            <option>تبریز</option>
                            <option>همدان</option>
                            <option>اصفهان</option>
                            <option>تهران</option>
                            <option>مشهد</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridCity"  >
                        <Form.Label> منطقه شهری </Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>شهرک/محله</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>خیابان اصلی/بلوار</Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>خیابان فرعی </Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                </Form.Row>

            </Form.Row>
            
            <div className='mx-auto p-1 d-flex justify-content-center col-md-8 col-lg-6 col-xl-4 border rounded mt-2 mb-2'>
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

export default Paths
