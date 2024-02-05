import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "../main";
import 'react-toastify/dist/ReactToastify.css';
function Signing() {
 
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
        const success = (a) => toast.success(a, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          
            });;



const {setIsAuthenticated,loading,setLoading}=useContext(Context);
    const [inputList, setInputList] = useState({email: "", password: "" });
    const [user, setUser] = useState("");
    const { email, password } = inputList;
    const navigate=useNavigate();
    const inchange = (e) => {
        setInputList({ ...inputList, [e.target.name]: e.target.value });
    };
  
    const onsubmit = async (e) => {
        try {
            if ( !email && !password){
                return;
            }
            e.preventDefault();
            const a = await axios.post(`${server}login`, inputList, {
                withCredentials: true,
            });
            console.log(a);
          if(a.status===200)
          {
            success("Logged In Successfully");
            // setIsAuthenticated(true);

            // changes made by ankit
            
            // get user details after login and save in local storage 
            const res = await axios.get(`${server}profile`, {
                withCredentials: true,
            }).then(res=>{
                console.log(res.data);
                setUser(res.data.user[0]);
                localStorage.setItem("user", JSON.stringify(res.data.user[0])); 
               window.location.reload();
            });
        }
        if(a.status===400){
            notify(a.data.message);
        }
        } catch (e) {
          
            console.log(e);
           notify(e.response.data.message);
          
        }
        notify();
    }
             

    return (
        <div id="sig">
            <section className="sing">
                <center>
                    <form className="formm" onSubmit={(e) => onsubmit(e)}>
                        <center>
                            <br />
                            <h1>Sign In</h1>
                            <br />
                            <input
                                type={"text"}
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => inchange(e)}
                                required
                            />
                            <br />
                            <input
                                type={"password"}
                                placeholder="Password"
                                value={password}
                                name="password"
                                onChange={(e) => inchange(e)}
                                required
                            />
                            <br />
                            <input type={"submit"} value="Sign In" id="subbtn" />
                           <p className="agr">Not Registered?<Link to="/register">Register</Link></p>
                        </center>
                    </form>
                </center>
            </section>
            <section className="si">
            <div>

        <ToastContainer />
      </div>
            </section>

        </div>
    );
}

export default Signing;