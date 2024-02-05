import Nav from "./components/nav.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { server } from "./main.jsx";
import { useContext } from "react";
import { Context } from "./main.jsx";
function Admin()
{
    const notify = (a) => toast.error(a, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      
        });
    const navigate=useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const {email,password}=user;
    const [isAdmin,setIsAdmin]=useState(" ");
    const handle=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const SubmitEvent=async (e)=>{
        e.preventDefault();
        if (!email && !password){
            return;
        }
        try{
           const a= await axios.post(`${server}adminlogin`,user,{withCredentials:true});
           console.log(a);
           if(a.status===200)
           {
                // get user details after login and save in local storage 
            const res = await axios.get(`${server}adminprofile`, {
                withCredentials: true,
            }).then(res=>{
                console.log(res.data.info);
                setIsAdmin(res.data.info[0]);
               console.log(isAdmin);
                localStorage.setItem("isAdmin", JSON.stringify(res.data.info[0])); 
                window.location.reload();
            });
           }
          
        }
        catch(e)
        {
          
            notify(e.response.data.message);
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