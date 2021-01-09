import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card,Form,Button} from 'react-bootstrap'
import './Meeting.css'

let btnStyle={
  boxShadow:'1px 1px 1px 1px rgba(0, 0, 0, 0.5)',
  cursor:'pointer',
  padding:'2px 5px',
  width:'50px',
  height:'18px',
}
  
function ShowMeet({meet , del , editMeet}) {

    const [Meet,setMeet]=useState(meet)
    const [view,setView]=useState(false)
    const [editStat,setEditStat]=useState(false)
    
    const viewToggel=()=>setView(!view)

    let GeteValue=(e)=>{ 
      let itemName=e.target.name;
      let itemValue=e.target.value
      setMeet({...Meet , [itemName]:itemValue} )
     }

    let sendEdit=(e)=>{ 
      e.preventDefault();
      let editform=document.forms.editionForm
      let editItem={ 
        date:editform.date.value, 
        startTime:editform.startTime.value, 
        endTime:editform.endTime.value,
        title:editform.title.value,
        person:editform.person.value,
        place:editform.place.value,
        tellNum:editform.tellNum.value,
        meetId:meet.meetId
      }
      setMeet(editItem)

      editMeet(editItem,meet.meetId)
      
      setEditStat(false)
    }

    return (
      <>
       {view ? (
         <Card className='px-0 mx-auto col-12 col-md-8 col-lg-6 border border-secondary alert-warning ' style={{direction:'rtl'}} >
            {editStat ? ( 
              <Form name='editionForm' onSubmit={sendEdit} >
                
                  <Card.Body className=' px-0 p-2 mt-2 text-right text-dark overflow-auto'style={{height:'80px',direction:'rtl'}}>
                    
                    <span  className=' m-auto d-flex justify-content-right ' >
                      <p> اصلاح جلسه </p> 
                      <Form.Control type='text' name='title' value={Meet.title} onChange={GeteValue} className='col inputbox ' />
                    </span>
                    <span className='d-flex justify-content-right'>
                      <p> تاریخ برگزاری </p> 
                      <Form.Control type="date" name='date' value={Meet.date} onChange={GeteValue} className='inputbox p-0' /> 
                    </span>
                    <span className='d-flex justify-content-right'>
                      <p>از </p> 
                      <Form.Control type="time"  name='startTime' value={Meet.startTime} onChange={GeteValue} className='inputbox ml-2 ' />
                      <p >تا </p> 
                      <Form.Control type="time"  name='endTime' value={Meet.endTime} onChange={GeteValue} className='inputbox ml-2' /> 
                    </span>    
                    <span className='d-flex justify-content-right'>
                        <p>با</p> 
                        <Form.Control type='text' name='person' value={Meet.person} onChange={GeteValue} className='col inputbox' /> 
                    </span>    
                    <span className='d-flex justify-content-right'>
                        <p>در محل </p> 
                        <Form.Control type='text' name='place' value={Meet.place} onChange={GeteValue} className='col inputbox' />
                    </span>    
                    <span className='d-flex justify-content-right'>
                        <p>شماره تماس جهت هماهنگی </p>  
                        <Form.Control type='text' name='tellNum' value={Meet.tellNum} onChange={GeteValue} className='col inputbox' />
                    </span>    
                    
                  </Card.Body>
             
                <Card.Footer className='p-0 d-flex justify-content-right align-items-center'>
                  <Button type='submit' className="mr-2 badge rounded-pill badge-info text-white border-0" 
                      style={btnStyle}   
                      >
                      ثبت
                  </Button>
                  <Button className="mr-2 badge rounded-pill badge-danger text-white border-0 " 
                      style={btnStyle} 
                      onClick={()=>setEditStat(false)}
                        >
                      لغو
                  </Button>
                  {/* جهت تنظیم استایل قرارداده شده است */}
                  <h3 style={{width:'25px', height:'25px'}}></h3> 
                </Card.Footer>
              </Form>
            ): (   
            <>
  
                <Card.Body className='mt-2 alert-warning p-1  text-right text-dark overflow-auto rounded ' style={{height:'80px',direction:'rtl'}}>
               <div className='d-flex justify-content-right'>
                
                  {" جلسه "} {Meet.title}
                  {' در تاریخ '} {Meet.date} 
                  {" از ساعت "}{Meet.startTime}
                  {" تا "} {Meet.endTime} 
                  {"با"} {Meet.person} 
                  {" در "} {Meet.place}
                  {' شماره هماهنگی '} {Meet.tellNum}
                </div>
                </Card.Body>
                <Card.Footer className='p-0 mx-0'>

                  <div className='m-auto p-0 d-flex justify-content-right align-items-center ' >
                    <Button className="mr-2 badge rounded-pill badge-info text-white border-0" 
                      style={btnStyle} onClick={()=>setEditStat(true)}>
                      اصلاح
                    </Button>
                    <Button className="mr-2 badge rounded-pill badge-danger text-white border-0" 
                      style={btnStyle}  
                      onClick={()=>del(Meet.meetId)}
                    >
                      حذف
                    </Button> 

                    <Button className='m-1 mr-auto p-0 alert-primary  rounded-pill text-center border-0 ' 
                    style={{cursor:'pointer',width:'25px', height:'25px',boxShadow:'1.5px 1.5px 2px 1px rgba(0, 0, 0, 0.5)'}} 
                    onClick={viewToggel}
                    >
                      <h4>^</h4> 
                    </Button>
                 </div>
                </Card.Footer>
              
            </>
          )}
         </Card>
             
           ): (
          <div onClick={viewToggel} className='mx-auto m-1 p-2 col-12 col-md-8 col-lg-6 d-flex justify-content-right
          alert-danger border border-secondary rounded  '
            style={{height:'55px', direction:'rtl' , cursor:'pointer' }}
           >
            <div  className=' d-inline-flex overflow-hidden text-right '>
              <strong className='ml-1' >
                {' جلسه '} {Meet.title} 
              </strong>
              <strong > 
                {' تاریخ: '}{Meet.date}  
              </strong>
            </div> 
          </div>
        )} 
       </> 
   )}

  export default ShowMeet