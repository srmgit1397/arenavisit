import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Row} from 'react-bootstrap'
import ShowMeet from './ShowMeet'
import GetMeet from './GetMeet'

const Meetes=()=>{

  const [ meetings , setMeetings ]=useState([])

    const AddMeet=(meetform)=> { 
        setMeetings( [...meetings ,
            {   date: meetform.date.value, 
                startTime:meetform.startTime.value, 
                endTime:meetform.endTime.value,
                title:meetform.title.value,
                person:meetform.person.value,
                place:meetform.place.value,
                tellNum:meetform.tellNum.value,
                meetId:Date.now()
            }])
     }

  let DeletMeet=(delId)=>{ setMeetings(meetings.filter((item)=>item.meetId!==delId)) }

  let EditMeet=(editItem,editId)=>{setMeetings(meetings.map((item)=>item.meetId!==editId ? item : editItem))}

  return(
    <div id='notePage' className='mx-auto p-1 col-11 col-md-8 mt-2 text-right' >
        <GetMeet takeMeet={AddMeet} />
        <div id='noteDiv' className='mx-auto p-1 mt-2 ' >
          <Row>
            {meetings.map((item , index)=><ShowMeet key={item.meetId} meet={item} del={DeletMeet} editMeet={EditMeet}/>)}
          </Row>  
        </div>        
    </div>
)}

export default Meetes
