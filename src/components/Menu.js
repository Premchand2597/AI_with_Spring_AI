import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () =>{

    //const [activeButtons, setActiveButtons] = useState('ask-ai');

    // function handleActiveButton(buttonType){
    //         setActiveButtons(buttonType);
    //     }

    const location = useLocation(); // gives current path like "/addData"

    return(
        <ul className="nav-list" 
            style={{listStyle: "none", textAlign: "left", margin: "0", padding: "0"}}>

            <li className={location.pathname === "/" ? "active" : ""} 
                style={{padding: "10px", cursor: "Pointer", borderRadius: "10px"}}>
                    <Link className={location.pathname === "/" ? "active" : ""}  
                            style={{textDecoration: "none"}} to="/">
                            Ask AI
                    </Link>
            </li>

            <li className={location.pathname === "/addData" ? "active" : ""} 
                style={{padding: "10px", cursor: "Pointer", marginTop: "5px", borderRadius: "10px"}}>
                    <Link className={location.pathname === "/addData" ? "active" : ""} 
                            style={{textDecoration: "none"}} to="/addData">
                            Add &amp; View Data
                    </Link>
            </li>
        </ul>
    );
}

export default Menu;