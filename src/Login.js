import React from 'react'
import './styles/loginStyle.css'
export default function Login() {
    function handlesubmit(event){
        event.preventDefault();
        alert(event.target.uname.value)
    }
    return (
        <form action="/login/data/" method="GET" onSubmit={handlesubmit}>
            <h1>Login</h1>
            <div class="formcontainer">
                <div class="container">
                    <label for="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit" >Login</button>
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