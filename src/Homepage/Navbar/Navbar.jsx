import React from "react";
import IconMagnify from "../../Icons/IconMagnify";
import { useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({login,setLogin,signup,setSignup,user}) => {
    const navbar_list = ['About','Contact','Premium'];
    const [islogin,setIslogin] = useState(false);
    const [issignup,setIssignup] = useState(false);
    
    const handlelogin = () => {
        setIslogin(true);
        setTimeout(() =>{
            setLogin(true);
            setIslogin(false);
            navigate('/login')
        },2000);
    }
    const handlesignup =() => {
        setIssignup(true);
        setTimeout(()=> {
            setSignup(true);
            setIssignup(false);
            navigate('/signup')
        },2000)
    }
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="input_search">
              <input type="text" className="input" placeholder="Search for Musics, Artists, Albums,..." />
              <i><IconMagnify /></i>
        </div>
          
            {navbar_list.map((item) => { return(
                <h2 className="navbar_content">{item}</h2>)
            })}
        {user ? (<div className="username">
                   <h3>Hello, {user.username}!</h3>
                   <button>Log Out</button>
            </div>) : (
            <div className="loginsignup">
            
                <button className="login" onClick={() => 
                    
                    {handlelogin()} 
                    } disabled = {islogin}>{islogin? "Logging in ....": "Log in"}</button>
                <button className="signup" onClick={() => 
                    handlesignup()} disabled = {issignup}>{issignup? "Signing up...":"Sign up"}</button>
             
            </div>)}
            
        </div>
    )
}
export default Navbar;