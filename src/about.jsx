import d from "./assets/dummy.jpeg"
import {Link} from "react-router-dom";
function About()
{
    return(
        <>

        <div className="containerr">

            <div className="rightt">
                <div className="imran">
                    <img src={d} style={{zIndex: "20"}} alt={"image"}/>
                    <Link to="/"> <button style={{zIndex:"25"}} className="btn btn-outline-light">Home</button></Link>
                    <div className="imm">
                    <h1 style={{color: "white", zIndex: "20"}}>Imran Pasha</h1>

                    <h1 style={{color: "white", zIndex: "20"}}>1hk21cs051</h1>

                    <h1 style={{color: "white", zIndex: "20"}}>DBMS Project</h1>
                    </div>
                </div>
                <div className="junaid">
                    <img src={d} style={{zIndex: "20"}} alt={"image"} id="jun"/>
                    <div className="imm" id="junn">
                        <h1 style={{color: "white", zIndex: "20"}}>Junaid Mehraj</h1>

                        <h1 style={{color: "white", zIndex: "20"}}>1hk21cs059</h1>

                        <h1 style={{color: "white", zIndex: "20"}}>DBMS Project</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;