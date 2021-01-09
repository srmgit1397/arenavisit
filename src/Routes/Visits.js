import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
import VisitShow from '../Modules/VisitsComp/VisitShow'
import {Link} from 'react-router-dom'

const FBtnStyle={
    width:'60px',
    height:'40px',
    margin:'auto',
    marginRight:'20px',
    boxShadow:'3px 4px 4px 2px  rgba(0, 0, 0, 0.45)',
}

function Visits(){
    return(
        <div  >
            
            <VisitShow/>
            
            <div className='mx-auto p-1 d-flex justify-content-center col-9 col-md-6 border rounded mt-2'>
                <Link className='nav-link text-white m-auto text-center ' to='/home'>
                    <Button variant="info" style={FBtnStyle} >لغو </Button>
                </Link>
                <Link className='nav-link text-white m-auto text-center' to='/home'>
                    <Button variant="danger" style={FBtnStyle} >اصلاح</Button>
                </Link>
                <Link className='nav-link text-white m-auto text-center' to='/home'>
                    <Button variant="primary" style={FBtnStyle}  >ثبت </Button>
                </Link>
            </div>        
        </div>
    )
}

export default Visits