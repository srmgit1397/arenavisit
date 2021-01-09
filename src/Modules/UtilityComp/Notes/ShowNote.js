import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card,Alert,Form} from 'react-bootstrap'
import notePice from './../../../Pics/Icons/note.ico'

let btnStyle={
  boxShadow:'1px 1px 1px 1px rgba(0, 0, 0, 0.5)',
  cursor:'pointer',
  padding:'2px 5px',
  width:'50px',
  height:'18px'
}

let notePiceStyle={
    marginRight:'auto',
    width:'35px',
    height:'35px',
    cursor:'pointer',
  }
  
function ShowNote({note , del , editNote}) {
    
    const [editText,setEdit]=useState(note.text)

    const [editTitle,setTitle]=useState(note.title)

    const [view,setView]=useState(true)
    const viewToggel=()=>setView(!view)

    const [editStat,setEditStat]=useState(false)
    const editToggel=(fort)=>setEditStat(fort)
    
    let sendEdit=(text , title , noteId )=>{ 
      editNote(text,title,noteId)
      setEdit(text)
      editToggel(false)
     }
    return (
      <>
       {view ? (
         <Alert className=' mx-auto m-1 col-10 col-md-6 col-lg-4 border border-secondary p-0 alert-danger ' >
            {editStat ? ( 
              <>
                <div className='mt-2 d-flex justify-content-between pl-3 pr-2' style={{height:'35px'}} >
                  <Form.Control className='form-control mr-2 ml-1 text-right  overflow-auto h-100 w-100  p-1 ' 
                      type="text" value={editTitle}  as="textarea"  style={{direction:'rtl'}} onChange={(e)=>setTitle(e.target.value)}>  
                  </Form.Control>
                </div>
                <Card className='mt-2'style={{height:'200px',direction:'rtl'}} >
                  <Card.Body className='alert-warning px-0 p-3 text-right text-dark overflow-auto'>
                        <Form.Control className='form-control overflow-auto h-100 w-100  p-1 ' 
                          type="text" value={editText} onChange={(e)=>setEdit(e.target.value)} as="textarea">  
                        </Form.Control>
                  </Card.Body>
                </Card>
                <div>
                  <span className="m-1 badge rounded-pill badge-primary text-white" 
                      style={btnStyle} onClick={()=>sendEdit(editText , editTitle , note.noteId)}  >
                      ثبت
                  </span>
                  <span className="m-1 badge rounded-pill badge-danger text-white" 
                      style={btnStyle} 
                      onClick={()=>sendEdit(note.text , note.title , note.noteId)}  >
                      لغو
                  </span>
                </div>
              </> 
            ): (   
            <>
              <div className='mt-2 d-flex justify-content-between p-0' style={{height:'35px'}} >
                <span className='ml-2 p-1 fs-2' style={{cursor:'pointer'}} onClick={viewToggel}>X</span>
                <strong className='mr-3 overflow-auto text-right ' style={{direction:'rtl'}} >{editTitle}</strong>
              </div>
              <Card className='mt-2'style={{height:'200px',direction:'rtl'}} >
                <Card.Body className='alert-warning px-0 p-3 text-right text-dark overflow-auto'>
                  {editText}
                </Card.Body>
              </Card>
                <div>
                  <span className="m-1 badge rounded-pill badge-info text-white" 
                    style={btnStyle} onClick={()=>editToggel(true)}>
                    اصلاح
                  </span>
                  <span className="m-1 badge rounded-pill badge-danger text-white" 
                    style={btnStyle}  onClick={()=>del(note.noteId)}>
                    حذف
                  </span>
                </div>
            </>
          )}
         </Alert>
             
           ): (
          <div className='mx-auto m-1 p-2 col-10 col-md-6 col-lg-4 d-flex justify-content-between
            alert-danger border border-secondary rounded d-flex flex-row'
            style={{height:'55px'}}
           >
             <div className='d-inline-flex'> 
                <img src={notePice} style={notePiceStyle}  className='' 
                onClick={viewToggel} alt=""
                ></img>
             </div>

             <div className=' d-inline-flex overflow-hidden'>{" "} <strong > {note.title} </strong> </div> 
          </div>
        )} 
       </> 
   )}

  export default ShowNote