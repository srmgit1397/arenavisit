import React,{useState } from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './LoginPage'
import AppContext from './AppContext'
import TopMenu from './Modules/MainComp/TopMenu'
import FootMenu from './Modules/MainComp/FootMenu'
import Home from './Routes/Home'
import CustomerPage from './Routes/CustumerPage'
import Paths from './Routes/Paths'
import Visits from './Routes/Visits'
import ReportPage from './Routes/ReportPage'
import Users from './Modules/UsersComp/Users'
import Misstions from './Modules/TaskComp/Misstions'
import Meetes from './Modules/UtilityComp/Meeting/Meetes'
import Notes from './Modules/UtilityComp/Notes/Notes'
import Messages from './Modules/UtilityComp/Messages/Messages'

let mainStyle={minHeight:'calc(100vh - 122px)',
               backgroundColor:'rgb(172, 183, 204)'
              }

function App() {

  let [loginState,setLogin]=useState(false)

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        login : ()=>{setLogin(true)},
        logout : ()=>{setLogin(false)},
        }}>
          { !loginState ? <LoginPage/> :
          <div >
            <TopMenu/>
              <main className='border rounded ' id='mainFrame' style={mainStyle}  >
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/visits" component={Visits}/>
                <Route path="/misstions" component={Misstions}/>
                <Route path="/customers" component={CustomerPage}/>
                <Route path="/paths" component={Paths}/>
                <Route path="/reports" component={ReportPage}/>
                <Route path="/useres" component={Users}/>
                <Route path="/Meetes" component={Meetes}/>
                <Route path="/Notes" component={Notes}/>
                <Route path="/Messages" component={Messages}/>
              </main>
            <FootMenu/>
          </div>}
           
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;