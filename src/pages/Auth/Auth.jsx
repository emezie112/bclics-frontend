import React,{useState} from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        
        <div className="Webname">
          <h1>Bclics</h1>
          <h6>Have fun Together With Different People</h6>
        </div>
      </div>

      <LogIn/>
    </div>
  );
};
function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error , setError] = useState(false)
    const navigate = useNavigate()

    const handleClick = (e) => {
      e.preventDefault()
      if(username && password) {
        navigate("/video")
        setError(false)
      }else {
        setError(true)
      }
    }
    return (
      <section className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
          {error && <p className='formError'>Please enter all credentials</p>}
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>

            {/* linking the login to the home page same should be done for the signup */}
            <button onClick={(e) => handleClick(e)} className="button infoButton">Login </button>
          </div>
        </form>
      </section>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
