import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card,Form,Row,Button} from 'react-bootstrap'
import notePice from './../../../Pics/Icons/note.ico'

 let notePiceStyle={
      marginTop:'5px',
      marginRight:'25px',
      width:'45px',
      cursor:'pointer',  }
 
  let  GetNote=({takeNote})=>{
    const [warning , setWarning]=useState(false)
    const [text,setText]=useState('')
    const [title,setTitle]=useState('')

    let inputTitle=e=>{setTitle(e.target.value)}
    let inputText=e=>{ setText(e.target.value) }

    let sentNote=()=>{
      if( title.length>0 && text.length>0 )
      {
      takeNote({title,text});
      setTitle("");
      setText(""); 
      setWarning(false)
      }else{
        setWarning(true)
      }
    }
      
      return(
          <Card>
            <Card.Header className='alert-primary p-1' >
              <Row className='mx-auto d-flex align-items-center' style={{direction:'rtl'}} >
                <img src={notePice} style={notePiceStyle} alt='' ></img>
                <h5>ایجاد یادداشت جدید</h5>
              </Row>
            </Card.Header>
            <Card.Body className='alert-info p-1' >
              <Form.Control style={{height:'40px'}} 
                            className='text-right overflow-auto' 
                            id='titleNote'
                            as="textarea"
                            type="text" 
                            value={title}
                            placeholder="عنوان یادداشت"
                            onChange={inputTitle}
                            />
              <Form.Control style={{height:'90px'}} 
                            as="textarea"
                            className='text-right align-top mt-1 overflow-auto ' 
                            id='textNote'
                            type="text" 
                            value={text}
                            placeholder="متن یادداشت "
                            onChange={inputText}
                            />
            </Card.Body>
            <Card.Footer className='alert-primary mx-auto p-1 text-right col'>
              {warning ? <strong className='text-danger mr-4'>موضوع و متن حتما درج شود</strong> : null}
                <Button className='btn btn-success mr-1' 
                        onClick={sentNote}
                        >
                        ذخیره یادداشت
                </Button>
            </Card.Footer>
          </Card>
      )}
  
export default GetNote
