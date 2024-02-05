import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";

function Protected(props) {
    const navigate = useNavigate();
    const { Component } = props;
    const { isAuthenticated } = useContext(Context);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, []); // Specify an empty dependency array

    return(
        <div>
         <Component/>
        </div>
    );
}
export default Protected;