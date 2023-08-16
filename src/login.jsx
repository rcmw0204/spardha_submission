import React from 'react' ;
export const Login = (props) =>
{
    return (
        <div className="container">
            <h1>Login</h1>
        <form className="loginf">
            <label htmlFor = "email">Email</label>
        <input type = "email" placeholder = "Enter your email here" id = "email" name = "email" />
        <label htmlFor = "password">Password</label>
    <input type = "password" placeholder = "Enter your password here" id = "password" name = "password" />
    <button className= "sbtn" type = "submit">Log In</button>
    </form>
    <p>New User? </p>
    <button className="btn" onClick = {() => props.onFormSwitch('register')}>Register here </button>
    </div>
        )
}