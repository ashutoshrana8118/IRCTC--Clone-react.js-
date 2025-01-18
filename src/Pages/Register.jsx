import React from "react";
import "./Register.css";
function Register(){
    return(
        <>
        <div className="register">
            <h3>Register</h3>
            <form>
                <div className="register-form">
                    <label> Username </label>
                    <input type="text" id="username" placeholder="Enter your username" required/>
                </div>
                <div className="register-form">
                    <label>Email</label>
                    <input type="email"id="email" placeholder="Enter your email" required/>
                </div>
                <div className="register-form">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>
                
                <button id="btn" type="submit">Register</button>
                
            </form>    
        </div>
        </>
    )
}

export default Register;