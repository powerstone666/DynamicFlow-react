import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';

function Navuser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}profile`, {
          withCredentials: true,
        });
        
        if (res.status === 200) {
          const c = res.data.user[0];
        const fullname = c.firstname + ' ' + c.lastname;
        setUser(fullname); // Update the state with the data
} else {
          // Handle the case where the user is not authenticated
          // Redirect to login or handle the error appropriately
          navigate('/');
        }
      } catch (e) {
        console.log(e);
// Handle other errors if necessary
      }
    };

    fetchData();
  }, []);

  const logout = async (e) => {
    e.preventDefault();
      try {
        const res = await axios.post(`${server}logout`, null, {
          withCredentials: true,
        });
        console.log(res.data);
     window.location.href="/";
    } catch (error) {
      console.log(error);
    }
  };
  const [text] = useTypewriter({
    words: ['Welcome to', 'DynamicFlow'],
    loop: true, // Loop the animation
    // Adjust type speed as needed
  });

  const [view, setView] = useState('no');

  const vieww = () => {
    if (view === 'no') {
      setView('yes');
      var a = document.getElementById('v');
      a.style.display = 'block';
    }
    if (view === 'yes') {
      setView('no');
      var b = document.getElementById('v');
      b.style.display = 'none';
    }
  };

  return (
    <div>
      <nav className="navu">
        <center>
          <div className="ty">
            <span>{text}</span>
            <Cursor cursorColor={'aquamarine'} />
          </div>
        </center>

        <img
          src="https://cdn-icons-png.flaticon.com/128/3940/3940417.png"
          onClick={vieww}
          style={{ display: 'flex', marginLeft: '10px' }}
          alt="menu-icon"
        />
        <h1 style={{ display: 'flex', marginLeft: '90px' }}>{user}</h1>
      </nav>
      <div className="view" id="v" style={{ position: 'absolute', top: "90px", left: "50px", right: 0, bottom: 0, zIndex: 999 }}>
  <center>
    <Link to="/view" style={{ textDecoration: "none", outline: "none" }}>
      <h1 style={{ fontSize: '20px', padding: '30px', margin: 0 }} id="lll">View Profile</h1>
    </Link>
  
      <button
        className="btn btn-outline-danger"
        style={{ position: 'relative', top: '-25px' }}
        onClick={logout}
      >
        Log-Out
      </button>
    
  </center>
</div>

    </div>
  );
}

export default Navuser;
