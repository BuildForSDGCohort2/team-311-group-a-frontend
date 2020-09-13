import React from 'react'
import './loginStyle.css'
export default function Login() {
    return (
        <form action="/">
            <h1>Login</h1>
            <div class="formcontainer">
                <div class="container">
                    <label for="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit">Login</button>
                <div class="container" style={{backgroundColor: "gray"}}>
                    <label style={{paddingLeft: "15px"}}>
                        <input type="checkbox" name="remember" /> Remember Me?
                    </label>
                    <span class="psw"><a href="#"> Forgot password?</a></span>
                </div>
            </div>
        </form>
    )
}