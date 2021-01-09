import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Row} from 'react-bootstrap'
import ShowNote from './ShowNote'
import GetNote from './GetNote'

const Notes=()=>{

  let [newNote,setNote]=useState([])

  let Addnote=({title,text})=>{ setNote([...newNote,{title,text,noteId:Date.now(),showing:true}])}

  let DeletNote=(delId)=>{setNote(newNote.filter((item)=>item.noteId!==delId))}

  let EditNote=(textEdit , titelEdit , editId)=>{ 
    let editItem = newNote.find(item=>item.noteId===editId)
    setNote( newNote.map((item) => item.noteId !== editId ? item : { ...editItem,text:textEdit ,title:titelEdit }));
  }
  
  return(
    <div id='notePage' className='mx-auto p-1 col-11 col-md-8 mt-2 text-right' >
        <GetNote takeNote={Addnote} />
        <div id='noteDiv' className='mx-auto p-1 mt-2 ' >
          <Row>
            {newNote.map((item,index)=><ShowNote key={item.noteId} note={item} del={DeletNote} editNote={EditNote}/>)}
          </Row>  
        </div>        
    </div>
)}



export default Notes
