import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import { useState, useEffect } from "react";
function Navadmin()
{
    const navigate = useNavigate();
   const [isAdmin, setIsAdmin] = useState(null);
    const logout = async (e) => {
      e.preventDefault();
        try {
          localStorage.removeItem("isAdmin"); 
          setIsAdmin(null);
          const res = await axios.post(`${server}logout`, null, {
            withCredentials: true,
          });
        
       window.location.reload();
      } catch (error) {
       console.log(error);
      }
    };
   
    
return(
    <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
  <div className="container-fluid">
   
   
      <a className="navbar-brand text-black" style={{ fontSize: "30px" }}>Admin<span style={{ color: "aquamarine" }}>Panel</span></a>
      <form className="d-flex mt-2 mt-lg-0">
     <button className="btn btn-outline-light" style={{ width: "110px" }} onClick={(e) => logout(e)}>Logout</button>

      </form>
    </div>
</nav>

        </div>
);

}
export default Navadmin;