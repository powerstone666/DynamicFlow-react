import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navview from "../components/navview";
import {Link} from "react-router-dom";
import Navuser from "../components/navuser";
function V() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/profile", {
          withCredentials: true,
        });
        console.log(res.data);
        if (Array.isArray(res.data.user)) {
            setUser(res.data.user);
          } else {
            console.error("Invalid response format from the server");
          }// Update the state with the data
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="view">
      <Navview/>
    <div id="card">
        {user.map((use, index) => (
     <div className="container-sm">
     <div className="row">
       <div className="col-12" >
         <h1 style={{fontSize:"25px"}}>ID: {use.id}</h1>
         <h1 style={{fontSize:"25px"}}>First Name: {use.firstname}</h1>
         <h1 style={{fontSize:"25px"}}>Last Name: {use.lastname}</h1>
         <h1 style={{fontSize:"25px"}}>Email: {use.email}</h1>
        <br/><br/>
        <Link to="/user">
          <center>
          <button className="btn btn-outline-success" style={{ marginRight: "0px", width: "110px" }}>Home</button>
          </center>
        </Link>
      
         {/* Note: Avoid displaying sensitive information like passwords */}
       </div>
     </div>
   </div>
   
      ))}
    </div>
    </div>
  );
}

export default V;

