import { Link, useNavigate } from "react-router-dom";
import Navuser from "./components/navuser";
import axios from "axios";
import { useState, useEffect, useContext, useReducer } from "react";
import { server } from "./main";
import { Context } from "./main";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Notes()
{
  const [reducerValue,forceUpdate]=useReducer(x=>x+1,0);
  const [notes,setNotes]=useState([]);
  const navigate=useNavigate();
  const {isAuthenticated}=useContext(Context);
 
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}noteview`, {
          withCredentials: true,
        });
      
        if(Array.isArray(res.data.show))
        {
        setNotes(res.data.show);
       
        }
      } catch (e) {
        warn(e.response);
      }
    }
    fetchData();
  }, [reducerValue])

  const del = async (id) => {
    
    if(window.confirm("Are you sure you want to delete this note?"))
    {
    try {
      const res = await axios.delete(`${server}notedel/${id}`, {
        withCredentials: true,
      });
      forceUpdate();
   notify("Note Deleted Successfully");
   
    } catch (error) {

    warn("Note Not Deleted");
     
    }
  }
}
  
    return(
        <div id="nott">
        <Navuser/>
  
  
        <div className="d-grid gap-2" >
  <button className="btn btn-primary" type="button" onClick={()=>navigate("/user")}>HOME</button>
  </div>
 
        <div className="d-grid gap-2" >
       <button className="btn btn-success" type="button" onClick={()=>navigate("/noteadd")}> + ADD</button>
  </div>
  <div className="notes-grid">
{ notes.map((notee,index) => (

      <div className="notes-item" key={index} >
      <h1>{notee.title}</h1>
      <p>{notee.note}</p>
    
      <div className="card-footer text-body-secondary">
     <ul className="nav justify-content-center">
     <li className="nav-item">
        <Link to={`/noteedit/${notee.note_id}`} className="nav-link">
            <button className="button btn btn-primary">EDIT</button>
        </Link>
    </li>
  <li className="nav-item">
   
    <a className="nav-link" href="#"><button className="button btn btn-danger" onClick={()=>del(notee.note_id)}>DELETE</button></a>
    
  </li>
</ul>
</div>
      </div>
   
)) }
 </div>
 <ToastContainer/>
    </div>
 
    );

}
export default Notes;