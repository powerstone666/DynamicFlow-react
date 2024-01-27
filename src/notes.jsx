import { Link, useNavigate } from "react-router-dom";
import Navuser from "./components/navuser";
import axios from "axios";
import { useState, useEffect } from "react";
function Notes()
{
  const [notes,setNotes]=useState([]);
  const navigate=useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/noteview", {
          withCredentials: true,
        });
        console.log(res.data);
        if(Array.isArray(res.data.show))
        {
        setNotes(res.data.show);
        console.log(notes);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])

  const del = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/notedel/${id}`, {
        withCredentials: true,
      });
    
      window.confirm("Are you sure you want to delete this note?")
    window.alert("Note Deleted Successfully");
    window.location.href="/notes";
    } catch (error) {
      console.log(error);
      window.alert("Note Not Deleted");
      window.location.href="/notes";
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
    
      <div class="card-footer text-body-secondary">
     <ul className="nav justify-content-center">
     <li className="nav-item">
        <Link to={`/noteedit/${notee.note_id}`} className="nav-link">
            <button className="button btn btn-primary">EDIT</button>
        </Link>
    </li>
  <li className="nav-item">
   
    <a className="nav-link" href="#"><button className="button" class="btn btn-danger" onClick={()=>del(notee.note_id)}>DELETE</button></a>
    
  </li>
</ul>
</div>
      </div>
   
)) }
 </div>
    </div>
  
    );

}
export default Notes;