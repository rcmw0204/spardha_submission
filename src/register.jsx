export const Register = (props) =>
{
    return (
        <div className="container">
            <h1>Register</h1>       
        <form className ="registerf">
            <label htmlFor = "name">Full Name</label>
            <input type ="name" name = "name" id = "name" placeholder = "Enter your full name" /> 
            <label htmlFor = "email">Email</label>
        <input type = "email" placeholder = "Enter your email here" id = "email" name = "email" />
        <label htmlFor = "password">Password</label>
    <input type = "password" placeholder = "Enter your password here" id = "password" name = "password" />
    <button className = "sbtn" type = "submit">Register</button>
    </form>
    <p>Already have account?</p>
    <button className = "btn" onClick = {() => props.onFormSwitch('login')}> Log in here </button>
    </div>
    )
}