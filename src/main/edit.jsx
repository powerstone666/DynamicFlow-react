import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navadmin from "../components/navadmin";
import { server } from "../main";
function Eduser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    navigate("/adminview");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${server}edit/${id}`, user,{withCredentials:true});
      window.alert("Updated Successfully");
      navigate("/adminview");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`${server}viewid/${id}`,{withCredentials:true});
        if (Array.isArray(result.data.use) && result.data.use.length > 0) {
          setUser(result.data.use[0]);
        } else {
          console.error("Invalid response format from the server");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    loadUser();
  }, [id]);

  return (
    <div id="edii">
      <Navadmin/>
    <div className="container" style={{opacity:"0.9"}}>
      
      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"  style={{background:"white"}}>
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="firstname"
                value={user.firstname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lastname"
                value={user.lastname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Eduser;
