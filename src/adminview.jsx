import Navadmin from "./components/navadmin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { server } from "./main";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReducer } from "react";

function Adminview() {
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
  const notify = (a) => toast.success(a, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
  const warn = (a) => toast.error(a, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getusers = async () => {
      const res = await axios.get(`${server}adminview`, { withCredentials: true });
      if (Array.isArray(res.data.use)) {
        setUser(res.data.use);
      }
    }
    getusers();
  }, [reducerValue]);

  const del = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this note?")) {
        const res = await axios.delete(`${server}delete/${id}`, {
          withCredentials: true,
        });
        forceUpdate();
        notify("Note Deleted Successfully");
      }
    } catch (error) {
      warn(error.response);
    }
  }

  return (
    <div className="adminview"  style={{ height: "100vh" }}>
      <Navadmin />
      <div className="table-responsive" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <table className="table border shadow" style={{ opacity: "0.8" }}>
          <thead className="text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" className="text-center">{index + 1}</th>
                <td className="text-center">{user.firstname}</td>
                <td className="text-center">{user.lastname}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary mx-2" to={`edit/${user.id}`}>
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => del(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Adminview;
