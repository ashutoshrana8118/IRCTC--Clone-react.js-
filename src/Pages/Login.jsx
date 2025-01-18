import React from "react";
import "./Login.css";

function Login(){
    return(
        <>
        <div className="Login">
            <h2>Login</h2>
            <form>
                <div className="Login-form">
                    <label> Username</label>
                    <input type="text" id="username" placeholder="enter your username" required/>
                    
                </div>
                <div className="Login-form">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="enter your password" required/>
                </div>
                <button id="Login-btn" type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login;