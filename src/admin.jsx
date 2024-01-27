import Nav from "./components/nav.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Admin()
{
    const notify = () => toast("Please enter correct details");
    const navigate=useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const {email,password}=user;
    const handle=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const SubmitEvent=async (e)=>{
        e.preventDefault();
        if (!email && !password){
            return;
        }
        try{
           const a= await axios.post("http://localhost:5000/adminlogin",user,{withCredentials:true});
           console.log(a);
           if(a.status===200)
           {
              navigate("/adminview");
           }
          
        }
        catch(e)
        {
            console.log(e);
            notify();
        }
    }
    return(
        <div className="add">
            <Nav/>
            <center>

                <form className="formm" onSubmit={(e)=>SubmitEvent(e)}>
                    <center>
                        <br/><br/>
                        <h1>Admin Login</h1>
                        <br/>
                        <input type={"email"} placeholder="Email" value={email} name="email" onChange={(e)=>handle(e)} required/>
                        <br/>
                        <input type={"password"} placeholder="Password" value={password} name="password" onChange={(e)=>handle(e)} required/>
                        <br/>
                        <input type={"submit"} value="Login" id="subbtn"/>
                        <br/>
                        <p id="pp">Not an admin? <Link to="/">Sign-In</Link></p>
                    </center>
                </form>
                <div className="fooot">
            <Link to="/admin"> <button className="btn btn-outline-light" style={{marginRight:"40px",width:"110px"}}>Admin</button></Link>
                        <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>  <button className="btn btn-outline-light">About Us</button></Link>
            </div>
            </center>
            <div>
     
     <ToastContainer />
   </div>
        </div>
    );
}

export default Admin;