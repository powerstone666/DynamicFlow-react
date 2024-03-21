import d from "./assets/dummy.jpeg"
import {Link} from "react-router-dom";
import myself from "./assets/myself.jpeg"
import jun from "./assets/junaid.jpeg"
import Nav from "./components/nav";
function About()
{
    const github=()=>{
        window.open("https://github.com/powerstone666/BuildHub", "_blank");
    }
    const linked=()=>{
        window.open("https://www.linkedin.com/in/imranpasha636/","_blank");
    }
    return(
        <>
   <nav className="navbar navbar-expand-lg navbar-light" id="nav" style={{background:"white",borderBottom:"1px solid white",boxShadow:"  1px 1px 1px 5px  whitesmoke"}}>
  <div className="container-fluid">
    <center className="me-lg-auto ms-lg-auto"> 
      <h1 className="navbar-brand text-black" style={{ fontSize: "40px" }}>
        ABOUT<span style={{ color: "orange" }}>US</span>
      </h1>
    </center>
    <form className="d-flex mt-2 mt-lg-0">
    <Link to="/"> <button className="btn btn-outline-info" style={{ width: "110px" }}>HOME</button></Link>
    </form>
  </div>
</nav>

        <div className="containerr" >
          <div className="about">
           <div className="left">
             <img src={myself} alt="myself" />
           </div>
           <div className="right">
           <h1>IMRAN PASHA</h1>
           <h1>CEO & FOUNDER OF DYNAMICFLOW</h1>
           <h1>FULL STACK DEVELOPER</h1>
           <h1>You Can Contact Me Through:-</h1>
           <h2>Gmail: imranpasha8225@gmail.com</h2>
           <h3><span><img src=" https://cdn-icons-png.flaticon.com/128/1051/1051275.png"  style={{cursor:"pointer",height:"50px",marginRight:"20px"}} id="hub"onClick={github} ></img></span><span><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"  style={{cursor:"pointer",height:"50px"}} id="lin" onClick={linked}></img></span></h3>
            </div>
            </div>
            <div className="about">
            <div className="left">
             <img src={jun} alt="myself" />
           </div>
           <div className="right">
           <h1>JUNAID MEHRAJ</h1>
           <h1>CO-FOUNDER OF DYNAMICFLOW</h1>
           <h1>FULL STACK DEVELOPER</h1>
           <h1>You Can Contact Me Through:-</h1>
           <h2>Gmail: junaidpandith085@gmail.com</h2>
           <h3><span><img src=" https://cdn-icons-png.flaticon.com/128/1051/1051275.png"  style={{cursor:"pointer",height:"50px",marginRight:"20px"}} id="hub"onClick={github} ></img></span><span><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"  style={{cursor:"pointer",height:"50px"}} id="lin" onClick={linked}></img></span></h3>
            </div>
            </div>
        </div>
        </>
    );
}

export default About;
