import React from 'react'

const AppCont=React.createContext({
    autentic : false,
    login : ()=>{},
    logout : ()=>{},
    pageName : (pageName)=>{}
})

export default AppCont;