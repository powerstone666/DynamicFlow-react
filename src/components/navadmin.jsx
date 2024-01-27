import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
function Navadmin()
{
    const navigate = useNavigate();

    
    const logout = async () => {
      try {
        const res = await axios.get('http://localhost:5000/logout', {
          withCredentials: true,
        });
       window.location.href="/";
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
        <button className="btn btn-outline-light" style={{ width: "110px" }} onClick={logout}>Logout</button>
      </form>
    </div>

</nav>


        </div>
);

}
export default Navadmin;