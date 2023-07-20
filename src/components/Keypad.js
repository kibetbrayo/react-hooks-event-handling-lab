// Code Keypad Component Here
import React from "react";
function Keypad (){
    const handlePasswordChange = () =>{
        console.log('Entering password...');
    };
    return (
        <div>
            <h2>Keypad Component</h2>
            <input type="password" on onChange={handlePasswordChange}/>

        </div>
    
    );
}

export default Keypad;