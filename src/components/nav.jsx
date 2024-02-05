import {Link} from "react-router-dom";

function Nav()
{
    return(
        <div>  <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                <div className="container-fluid">
                    <center>
                        <a className="navbar-brand text-black" style={{marginLeft:"800px"}} id="mel">WEL<span style={{color:"aquamarine"}}>COME</span></a>
                    </center>
                    <form className="d-flex" id="dflex">
                        <Link to="/admin"> <button className="btn btn-outline-light" style={{marginRight:"40px",width:"110px"}}>Admin</button></Link>
                        <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>  <button className="btn btn-outline-light">About Us</button></Link>
                    </form>
                </div>
            </nav>

        </div>
    );
}

export default Nav;