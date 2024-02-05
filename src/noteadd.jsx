import React, { useEffect } from "react";
import Navuser from "./components/navuser";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { server } from "./main";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Noteadd()
{
  const notify = (a) => toast.success(a, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  
    });
    const warn = (a) => toast.error(a, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    
      });
  const [notes,setNotes]=useState({
    title:"",
    note:""
  });
  const {title,note}=notes;
  const handle=(e)=>{
    setNotes({...notes,[e.target.name]:e.target.value})
  }
 
  const submit=async(e)=>{
     e.preventDefault();
    try{
      if(!title && !note){

        warn("Please fill all the fields");
      }
    
   
else{
    const res = await axios.post(`${server}noteadd`, notes, {
      withCredentials: true, // Correct spelling
    })
    notify("Note Added Successfully");
  }
}
      catch(e)
      {
       warn(e.response)
      }
  }
 
    return(
        <div id="not" >
        <Navuser/>
        <div className="d-grid gap-2" >
  <button className="btn btn-success" type="button">ADD</button>
  </div>
  <div className="container text-center " id="notee">
  <div className="row">
    <div className="col-10  border-success" id="coll" style={{overflow:"hidden"}}>
    <form onSubmit={(e)=>submit(e)}>
    <br/><br/>
        <input type="text" placeholder="Title" value={title} name="title" onChange={(e)=>handle(e)}/><br/><br/>
       <textarea rows='10' cols='13' placeholder="Type Here........." value={note} name="note" onChange={(e)=>handle(e)}/><br/><br/>
      
      
     <div className="card-footer text-body-secondary">
     <ul className="nav justify-content-center">
     <li className="nav-item">
    <a className="nav-link" href="#"><button type="submit" className="button btn btn-primary">ADD</button></a>
  </li>
  <li className="nav-item">
    <Link to="/notes" className="nav-link" href="#"><button className="button btn btn-success">HOME</button></Link>
  </li>
</ul>
</div>
</form>
    </div>
  
  </div>
  <ToastContainer/>
</div>
</div>
    );

}
export default Noteadd;