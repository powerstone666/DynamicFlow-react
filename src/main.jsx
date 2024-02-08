import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {useState} from 'react';



export const server="https://dynamicflow.onrender.com/";

//export const server="https://dynamicflow.bytebreeze.xyz/";

//export const server="http://localhost:5000/";

export const Context = createContext({isAuthenticated:false,isAdmin:false,loading:false});

 const Appwrapper=()=>{
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [isAdmin,setIsAdmin]=useState(false);
const [loading,setLoading]=useState(false);
const [user,setUser]=useState({});
  return(
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,isAdmin,setIsAdmin,loading,setLoading,user,setUser}}>
    <App/>
    </Context.Provider>
  )
}
  
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>,
)
