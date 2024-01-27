import React, { useEffect } from "react";
import Navuser from "../components/navuser.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Noteedit()
{
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
      await axios.post(`http://localhost:5000/noteedit/${id}`, notes, {
        withCredentials: true, // Correct spelling
      })
      window.alert("Note Added Successfully");
     
    }
      catch(e)
      {
        console.log(e);
        window.alert("Note Not Added");
      }
  }
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/noteid/${id}`, {
            withCredentials: true,
          });
        
          if (Array.isArray(res.data.use) && res.data.use.length > 0) {
            // Set default values to prevent undefined
            setNotes(res.data.use[0]);
            console.log(notes);
          }
        } catch (e) {
          console.error(e);
        }
      };
      fetchData();
    }, [id]);
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

  <li className="nav-item">
    <a className="nav-link" href="#"><button className="button" class="btn btn-danger">DELETE</button></a>
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