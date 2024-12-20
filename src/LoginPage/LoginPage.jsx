import React, { useState } from "react";
import IconPassword from "../Icons/IconPasswordeye";
import IconFacebookreal from "../Icons/IconFacebookreal";
import IconGooglereal from "../Icons/IconGooglereal";
import IconForward from "../Icons/IconForward";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
const LoginPage = ({setUser}) => {
    const [formdata,setFormdata] = useState({
        email:'',
        password:''
    });
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { value } = e.target;
      
        // Update state explicitly for each field
        switch (e.target.name) {
          case "email":
            setFormdata((prevData) => ({ ...prevData, email: value }));
            break;
          case "password":
            setFormdata((prevData) => ({ ...prevData, password: value }));
            break;
         default:
            console.warn("Unhandled field:", e.target.name);
        }
      };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const dataToSubmit = {...formdata};
        try{
        const response = await fetch('http://localhost:8080/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataToSubmit),
              credentials:"include"
        });
        const result = await response.json();
        if(!response) {
            throw new Error('Failed to log in');
        }
        else {
            setUser({username :result.user.username});
            setTimeout(() => {
                setLoading(false);
                navigate('/')
              },3000)
        };
        console.log(result);
         }
         catch (error) {
            console.log(error);
            alert('Login failed')
         }

    }
    return (
        <div className="loginpage">
       
            
            <form onSubmit={handleSubmit}>
                <h1>Login to Continue</h1>
                <div className="inputs">
                    <input placeholder="E-Mail" onChange={handleChange} required value = {formdata.email}  name = 'email' />
                    <div className="password">
                        <input placeholder="Password" type = "password" onChange={handleChange} required value = {formdata.password} name = 'password' />
                        <i><IconPassword /></i>
                    </div>
                    <div className="forgotpass">
                        <button className="forgot">Forgot Password <span className="forwardclass"><IconForward /></span> </button>
                        <button className="islogin" type = 'submit'>Login</button>
                    </div>
                    <div className="fbgglogin">
                        <div className="fb">
                         <button className="fblogin"> <span><IconFacebookreal /></span>Facebook Login </button>
                        
                        </div>
                        <div className="gg">
                         <button className="gglogin"> <span><IconGooglereal /></span>Google Login </button>
                       
                        </div>
                        
                    </div>
                    <div className="bigsignupnow">
                         <div className="signupnow">
                              <h3>Don't have an account</h3>
                             <p>Sign up here</p>
                         </div>
                         <button className="signupbutton1">Sign up </button>
                    </div>
                    
                    
                </div>
                
            </form>
        </div>
    )
}
export default LoginPage;