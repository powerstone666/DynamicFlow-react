
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./landing.jsx";
import V from "./main/view.jsx";
import Landingregis from "./landingregis.jsx";
import About from "./about.jsx";
import Admin from "./admin.jsx";
import User from "./user.jsx";
import Chatbot from "./chatbot.jsx";
import Adminview from './adminview.jsx';
import Eduser from './main/edit.jsx';
import Notes from './notes.jsx';
import Noteedit from './main/noteedit.jsx';
import Noteadd from './noteadd.jsx';
import {useContext, useEffect} from "react";
import {Context} from "./main";
import axios from "axios";
import {server} from "./main";

import { Navigate } from 'react-router-dom';



  function App() {
    const {user, setUser,isAdmin,setIsAdmin}=useContext(Context);
   
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const localAdmin = JSON.parse(localStorage.getItem("isAdmin"));
   localUser && setUser(localUser); 
    localAdmin && setIsAdmin(localAdmin);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

    

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user && user.id ? <Navigate to="/user"/> : <Landing/>} ></Route>

                <Route path="/register" element={user && user.id ?  <Navigate to="/user"/> : <Landingregis/> }></Route>

                <Route path="/about" element={<About/>}></Route>

                <Route path="/admin" element={isAdmin && isAdmin.email ? <Navigate to="/adminview"/>:<Admin/>}></Route>

                <Route path="/user" element={user && user.id ? <User/> : <Navigate to="/"/>}></Route>

                <Route path="/bot" element={user && user.id ? <Chatbot/> : <Navigate to="/"/>}></Route>

                <Route path="/adminview" element={isAdmin && isAdmin.email ?<Adminview/>: <Navigate to="/admin"/>}></Route>

                <Route path="/adminview/edit/:id" element={isAdmin && isAdmin.email ?  <Eduser/>:<Navigate to="/admin"/>}></Route>

                <Route path="/view" element={user && user.id ? <V/> : <Navigate to="/"/>}></Route>

                <Route path="/notes" element={user && user.id ? <Notes/> : <Navigate to="/"/>}></Route>

                <Route path="/noteedit/:id" element={user && user.id ? <Noteedit/> : <Navigate to="/"/>}></Route>

                <Route path="/noteadd" element={user && user.id ? <Noteadd/> : <Navigate to="/"/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App  