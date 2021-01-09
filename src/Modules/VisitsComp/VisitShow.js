import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Accordion,Card,Button} from 'react-bootstrap'
import VisitForm from './VisitForm'
import VisitMisstions from './VisitMisstions'
import VisitTaskList from './VisitTaskList'

function VisitShow(){

    return(
        <div className='container-lg text-center pt-4 '>
        <Accordion className='p-0'>
            <Card className='p-0' >
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>ثبت و ویرایش برنامه سرکشی </h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" >
                    <Card.Body className='p-0'>
                        <VisitForm/>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer></Card.Footer>
            </Card>
        </Accordion>

        <Accordion className='p-0 mt-3'>
            <Card >
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>جدول برنامه های سرکشی به مشتریان</h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className='active'>
                    <Card.Body>
                        <VisitMisstions/>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer></Card.Footer>
            </Card>
        </Accordion>

        <Accordion className='p-0 mt-3'>
            <Card >
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>جدول برنامه بازدید مشتریان</h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className='active'>
                    <Card.Body>
                         <VisitTaskList/>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer></Card.Footer>
            </Card>
        </Accordion>
    </div>
    )
}

export default VisitShow