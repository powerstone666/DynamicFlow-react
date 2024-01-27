
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>} ></Route>
                <Route path="/register" element={<Landingregis/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                <Route path="/bot" element={<Chatbot/>}></Route>
                <Route path="/adminview" element={<Adminview/>}></Route>
                <Route path="/adminview/edit/:id" element={<Eduser/>}></Route>
                <Route path="/view" element={<V/>}></Route>
                <Route path="/notes" element={<Notes/>}></Route>
                <Route path="/noteedit/:id" element={<Noteedit/>}></Route>
                <Route path="/noteadd" element={<Noteadd/>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App  