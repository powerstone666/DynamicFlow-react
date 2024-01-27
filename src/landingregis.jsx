import Nav from "./components/nav.jsx";
import {Link} from "react-router-dom";
import Signin from "./main/signin.jsx";
import Register from "./main/register.jsx";

function Landingregis()
{
    return (
        <div className="landing">
            <Nav/>
            <div id="btnn">
                <section id="a" style={{color:"white"}} >
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}> <h1>SignIn</h1></Link>
                </section>
                <section id="b">
                             <h1 style={{color: "aquamarine"}}>Register</h1>
                </section>
            </div>
            <Register/>
        </div>
    );
}

export default Landingregis;