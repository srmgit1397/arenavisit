import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col,Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'


const FBtnStyle={
    padding:'0px',
    width:'80px',
    height:'35px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 3px 3px 2px  rgba(0, 0, 0, 0.5)',
}

const RepotFilter=()=>{
  return(
      <div className='p-1 text-right  ' style={{direction:'rtl' }} >
        <Form className='border rounded mt-1 col-md-11 mx-auto alert-secondary p-0'>
          <h6 className='mx-auto mt-3 text-center col col-md-4 p-1'>گزینه های جستجو</h6>
                <Form.Row className='m-auto '>
                    <Form.Group as={Col} controlId="formGridEmail" className='m-auto col-4 col-md-3 col-lg-2'>
                        <Form.Label>از تاریخ</Form.Label>
                        <Form.Control type="name" placeholder="از " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className='m-auto col-4 col-md-3 col-lg-2'>
                        <Form.Label> تا تاریخ</Form.Label>
                        <Form.Control type="name" placeholder="تا " />
                    </Form.Group>
                </Form.Row>
            <Form.Row className='mt-2 mx-auto'>
                <Form.Row className='m-auto col-md-6 col-lg-4'>
                    <Form.Group as={Col} controlId="formGridState"  >
                        <Form.Label>فروشنده</Form.Label>
                        <Form.Control as="select"  defaultValue="Choose..."  >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>مشتری</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..."   >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto col-md-6 col-lg-4'>
                    <Form.Group as={Col} controlId="formGridState"  >
                        <Form.Label>استان</Form.Label>
                        <Form.Control as="select"  defaultValue="Choose..."  >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>شهر</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..."   >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row className='m-auto col-md-6 col-lg-4'>
                    <Form.Group as={Col} controlId="formGridState"  >
                        <Form.Label>منطقه</Form.Label>
                        <Form.Control as="select"  defaultValue="Choose..."  >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>مسیر</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..."   >
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form.Row>
            
            <div className='mx-auto p-1 d-flex justify-content-center col-md-8 col-lg-6 col-xl-4 mt-2 mb-2'>
                {/* <Link className='nav-link text-white m-auto text-center' to='/home'> */}
                    <Button  className='alert-primary border-0'  style={FBtnStyle} >جستجو</Button>
                {/* </Link> */}
            </div>        
        </Form>
    </div>
)}

export default RepotFilter
