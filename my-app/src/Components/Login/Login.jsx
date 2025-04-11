import React from "react";
import "./Login.css";
 
function Login() {
    function handleUsername(event) {
        console.log("Username", event.target.value)
    }
    function handlePassword(event) {
        console.log("Password", event.target.value)
    }
    //java script code

    return (
        // htmls5, css3 and bootstrap code
        <>
 <div className="container text-center">
<div className="row Login-form">
          <div className="col">
            Instagram photos
          </div>
          <div className="col">
            <p>Instagram</p>
            <input type="text" onChange={handleUsername}/>Email <br/>
            <input type="password" onChange={handlePassword}/>Password<br/>
            <button type="onclick">Login</button>

          </div>
        </div>
        </div>
        </>
    );
}
export default Login;