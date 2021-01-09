import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MainSlider from './../Modules/MainComp/MainSlider'
import MessageAlert from './../Modules/MainComp/MessageAlert'
import DirectLinks from './../Modules/MainComp/DirectLinks'
import './Home.css'

 const Home=()=>{
    return(
      <>
        <MainSlider/> 
        <div style={{direction:'rtl', textAlign:'right', padding:'5px' }}>
          <MessageAlert/>
          <DirectLinks/>
        </div>
      </>
    )
  }

  export default Home;