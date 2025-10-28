import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () =>{

    const [activeButtons, setActiveButtons] = useState('ask-ai');
    
        function handleActiveButton(buttonType){
            setActiveButtons(buttonType);
        }

    return(
        <ul className="nav-list" style={{listStyle: "none", textAlign: "left", margin: "0", padding: "0"}}>
            <li className={activeButtons === 'ask-ai' ? 'active' : ''} 
            style={{padding: "10px", cursor: "Pointer", borderRadius: "10px"}}>
                <Link className={activeButtons === 'ask-ai' ? 'active' : ''} 
                        onClick={()=>handleActiveButton('ask-ai')} 
                        style={{textDecoration: "none"}} to="/">
                    Ask AI
                </Link>
            </li>
            <li className={activeButtons === 'add-data' ? 'active' : ''} 
            style={{padding: "10px", cursor: "Pointer", marginTop: "5px", borderRadius: "10px"}}>
                <Link className={activeButtons === 'add-data' ? 'active' : ''} 
                        onClick={()=>handleActiveButton('add-data')} 
                        style={{textDecoration: "none"}} to="/addData">
                    Add &amp; View Data
                </Link>
            </li>
        </ul>
    );
}

export default Menu;