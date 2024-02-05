import React, { useState, useEffect } from "react";
import axios from "axios";
import Navuser from "./components/navuser.jsx";
import { Link } from "react-router-dom";
import { server } from "./main.jsx";
import { useContext } from "react";
import { Context } from "./main.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User() {
    const [user, setUser] = useState();
   const navigate=useNavigate();
    const {isAuthenticated}=useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${server}profile`,{
                    withCredentials: true,
                });
               
                setUser(res.data.user[0]);  // Update the state with the data
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);  // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="userr">
            <Navuser />
            <div className="mai">
                <div className="chat">
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111727.png" style={{ height: "80px" }} />
                    <h1 style={{ fontSize: "20px" }}>Chat-Bot</h1>
                    <Link to="/bot"><img src="https://cdn-icons-png.flaticon.com/128/6784/6784625.png" style={{ height: "80px" }} id="go" /></Link>
                </div>
                <div className="note">
                    <img src="https://cdn-icons-png.flaticon.com/128/4215/4215246.png" style={{ height: "80px" }} />
                    <h1 style={{ fontSize: "20px" }}>Notes</h1>
                  <Link to="/notes"><img src="https://cdn-icons-png.flaticon.com/128/6784/6784625.png" style={{ height: "80px" }} id="go" /></Link>
                </div>
            </div>
        </div>
    );
}

export default User;
