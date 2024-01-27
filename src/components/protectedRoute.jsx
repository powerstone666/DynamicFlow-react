import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props)
{
    const navigate=useNavigate();
    const {Component}=props;
   
    return(
        <div>
         <Component/>
        </div>
    );
}
export default Protected;