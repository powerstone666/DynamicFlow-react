import Navadmin from "./components/navadmin";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { server } from "./main";
function Adminview()
{
    const[users,setUser]=useState([]);
    useEffect(() => {
       const getusers=async()=>{
           const res=await axios.get(`${server}adminview`,{withCredentials:true});
           if(Array.isArray(res.data.use)){
                      setUser(res.data.use);
           }
       }
      getusers();
    }, []);

    const del = async (id) => {
      try {
        const res = await axios.delete(`${server}delete/${id}`, {
          withCredentials: true,
        });
      
        window.confirm("Are you sure you want to delete this note?")
      window.alert("Note Deleted Successfully");
      window.location.href="/adminview";
      } catch (error) {
        console.log(error);
        window.alert("Note Not Deleted");
        window.location.href="/adminview";
      }
  }
    
    
return(
    <div className="adminview">
        <Navadmin/>
        <div className="table-responsive">
  <table className="table border shadow" align="center" style={{ opacity: "0.8" }}>
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

    </div>
);
}
export default Adminview;