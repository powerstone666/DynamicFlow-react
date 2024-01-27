import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Signing() {
    var log=false
    const [inputList, setInputList] = useState({email: "", password: "" });
    const [user, setUser] = useState("");
    const { email, password } = inputList;
    const navigate=useNavigate();
    const inchange = (e) => {
        setInputList({ ...inputList, [e.target.name]: e.target.value });
    };
    const notify = () => toast("Please enter correct details");
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
             navigate("/user");
          }
          if(a.status===400){
            notify();
          }
        } catch (e) {
            console.log(e);
            notify();
        }
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