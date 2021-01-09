import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button,Card,Accordion} from 'react-bootstrap'
import OtherTaskList from './OtherTaskList'
import {Link} from 'react-router-dom'
import OtherTaskForm from './OtherTaskForm'

const FBtnStyle={
    width:'60px',
    height:'40px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 3px 4px 2px  rgba(0, 0, 0, 0.45)',
}

function Misstions(){

    return(

        <div className='container-lg text-center pt-4 '>
             <Accordion className='p-0' >
                <Card  >
                    <Card.Header >
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h5  ><strong> ثبت ماموریت های غیرسرکشی </strong></h5>
                         </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='p-0' >
                             <OtherTaskForm/>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer></Card.Footer>
                </Card>
            </Accordion>
             <Accordion className='pt-2' >
                <Card  >
                    <Card.Header >
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h5><strong>جدول ماموریتهای محوله</strong></h5>     
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <OtherTaskList/>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer></Card.Footer>
                </Card>
            </Accordion>
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
            </div>        
        </div>
    )
}

export default Misstions