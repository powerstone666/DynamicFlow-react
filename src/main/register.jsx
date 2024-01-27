import React, {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { server } from "../main";
function Register()
{
    const notify = () => toast("User Alredy Exist");
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const {firstname, lastname, email, password} = input;
    const handle = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }
    const senddata =  async (e) => {
        try {
            e.preventDefault();
            if (!firstname && !lastname && !email && !password){
                return;
            }
          const a=  await axios.post(`${server}register`, input);
          console.log(a);
        } catch (e) {
            console.log(e);
            const notify = () => toast("Please enter correct details");
        }
    }

    return (
        <div id="sig">
            <section className="si" id="re">

            </section>
            <section className="sing" id="sii">
                <center>


                    <form  onSubmit={(e)=>senddata(e) } className="forme">
                        <center>
                            <br/><br/>
                            <h1>Register</h1>
                            <br/>
                            <input type={"text"} placeholder="First Name" value={firstname} name="firstname"  onChange={(e)=>handle(e)}  required/>
                            <br/>
                            <input type={"text"} placeholder="Last Name" value={lastname} name="lastname" onChange={(e)=>handle(e)}  required/>
                            <br/>
                            <input type={"email"} placeholder="Email" value={email} name="email" onChange={(e)=>handle(e)}  required/>
                            <br/>
                            <input type={"password"} placeholder="Password" value={password} name="password" onChange={(e)=>handle(e)}  required/>
                            <br/>
                            <input type={"submit"} value="Register" id="subbtn"/>
                           <p className="agr">Already Registered?<Link to="/">SignIn</Link></p>
                        </center>
                    </form>
                </center>
            </section>
            <div>
     
     <ToastContainer />
   </div>
        </div>
    );
}

export default Register;