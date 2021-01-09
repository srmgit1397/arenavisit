import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Accordion,Card,Button} from 'react-bootstrap'
import VisitMisstions from '../Modules/ReportsComp/ReportMisstions'
import VisitTaskList from '../Modules/ReportsComp/ReportTaskList'
import ReportFilter from '../Modules/ReportsComp/ReportFilter'
function ReportPage(){

    return(
        <div className='container-lg text-center '>

        <Accordion className='p-0 mt-2 '>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5>گزارش برنامه های سرکشی</h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className='active'>
                    <Card.Body className='p-0'>
                        <ReportFilter/>
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
                    <h5> گزارش ماموریتهای محوله</h5>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className='active'>
                    <Card.Body className='p-0'>
                    <ReportFilter/>
                         <VisitTaskList/>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer></Card.Footer>
            </Card>
        </Accordion>
    </div>
    )
}

export default ReportPage