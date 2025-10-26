import React, { useState } from 'react';
import Chat_AI from './Chat_AI';
import Add_data from './Add_Data';

const Button = () =>{
    const [activeButtons, setActiveButtons] = useState('ask-ai');

    function handleActiveButton(buttonType){
        //alert(buttonType);
        setActiveButtons(buttonType);
    }

    return(
        <>
            <div style={{display: "flex", margin: "20px auto", alignItems: 'center', width: "20%", justifyContent: "space-around"}}>
                <button onClick={()=>handleActiveButton('ask-ai')} 
                        style={{border: "none", outline: "none", padding: "10px", cursor: 'pointer',
                            background: activeButtons === 'ask-ai' ? 'blue' : '',
                            color: activeButtons === 'ask-ai' ? '#fff' : '',
                            fontWeight: activeButtons === 'ask-ai' ? 'bold' : '',
                        }}>
                    Ask AI</button>
                <button onClick={()=>handleActiveButton('add-form')}
                        style={{border: "none", outline: "none", padding: "10px", cursor: 'pointer',
                            background: activeButtons === 'add-form' ? 'blue' : '',
                            color: activeButtons === 'add-form' ? '#fff' : '',
                            fontWeight: activeButtons === 'add-form' ? 'bold' : '',
                        }}>
                    Add Form</button>
            </div>

            <div>
                {activeButtons === 'ask-ai' ? 
                <div><Chat_AI/></div> :
                <div><Add_data/></div> }
            </div>
        </>
    );
}

export default Button;