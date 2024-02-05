import React, { useEffect } from "react";
import Navuser from "../components/navuser.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { server } from "../main.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Noteedit()
{
  const navigate=useNavigate();
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
  const { id } = useParams();
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
      const res=await axios.post(`${server}noteedit/${id}`, notes, {
        withCredentials: true, // Correct spelling
      })
     notify("Note Updated Successfully");
     
    }
      catch(e)
      {
       
warn(e.response);     
 }
  }
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${server}noteid/${id}`, {
            withCredentials: true,
          });
        
          if (Array.isArray(res.data.use) && res.data.use.length > 0) {
            // Set default values to prevent undefined
            setNotes(res.data.use[0]);
            
          }
        } catch (e) {
         warn(e.response);
        }
      };
      fetchData();
    }, [id]);
    const del = async () => {
     
      if(window.confirm("Are you sure you want to delete this note?"))
      {
      try {
        const res = await axios.delete(`${server}notedel/${id}`, {
          withCredentials: true,
        });
    
     notify("Note Deleted Successfully");
     navigate("/notes")
     
      } catch (error) {
  
      warn("Note Not Deleted");
       
      }
    }
  }
  
    return(
        <div id="not">
        <Navuser/>
        <div className="d-grid gap-2" >
  <button className="btn btn-success" type="button">EDIT</button>
  </div>
  <div className="container text-center " id="notee">
  <div className="row">
    <div className="col-10  border-success" id="coll" style={{overflow:"hidden"}}>
    <form onSubmit={(e)=>submit(e)}>
    <br/><br/>
        <input type="text" placeholder="Title" value={notes.title} name="title"  onChange={(e)=>handle(e)}/><br/><br/>
       <textarea rows='10' cols='13' placeholder="Type Here........." value={notes.note} name="note" onChange={(e)=>handle(e)}></textarea><br/><br/>
       <div class="card-footer text-body-secondary">
     <ul className="nav justify-content-center">
     <li className="nav-item">
    <a className="nav-link" href="#"><button className="button" class="btn btn-primary" type="submit">SAVE</button></a>
  </li>
  <ToastContainer/>
  <li className="nav-item">
    <a className="nav-link" href="#"><button className="button" class="btn btn-danger" onClick={del}>DELETE</button></a>
  </li>
  <li className="nav-item">
    <Link to="/notes" className="nav-link" href="#"><button className="button btn btn-success">HOME</button></Link>
  </li>
</ul>
</div>
        </form>
      
    
    </div>
  
  </div>
</div>
</div>
    );

}
export default Noteedit;