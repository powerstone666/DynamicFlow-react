import Nav from "./components/nav.jsx";
import Signin from "./main/signin.jsx";
import {Link} from "react-router-dom";

function Landing()
{
    return(
        <div className="landing">
            <Nav/>
            <div id="btnn">
              <section id="a" >
                 <h1 style={{color:"aquamarine"}}>SignIn</h1>
              </section>
                <section id="b">
                    <Link to="/register"  style={{textDecoration:"none" ,color:"white"}} ><h1>Register</h1></Link>
                </section>
            </div>
            <Signin/>
            <div className="foot">
            <Link to="/admin"> <button className="btn btn-outline-light" style={{marginRight:"40px",width:"110px"}}>Admin</button></Link>
                        <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>  <button className="btn btn-outline-light">About Us</button></Link>
            </div>
        </div>
    );
}
export default Landing;