import React, { useState } from "react";
import IconPassword from "../Icons/IconPasswordeye";
import IconGoback from "../Icons/IconGoback";
import {useNavigate} from 'react-router-dom';
import "./SignUp.css";

const SignUp = ({setUser}) => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });
  const [loading,setLoading] = useState(false);
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value } = e.target;
  
    // Update state explicitly for each field
    switch (e.target.name) {
      case "username":
        setFormdata((prevData) => ({ ...prevData, username: value }));
        break;
      case "email":
        setFormdata((prevData) => ({ ...prevData, email: value }));
        break;
      case "password":
        setFormdata((prevData) => ({ ...prevData, password: value }));
        break;
      case "phoneNumber":
        setFormdata((prevData) => ({ ...prevData, phoneNumber: value }));
        break;
      case "role":
        setFormdata((prevData) => ({ ...prevData, role: value }));
        break;
      default:
        console.warn("Unhandled field:", e.target.name);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formdata, role: formdata.role.toUpperCase() };
    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
        credentials:'include'
      });
      const result = await response.json();
      if (response.ok) {
        
        console.log("Success:", result);
        alert("Account created successfully!");
        setUser({username :result.newUser.username})
        setTimeout(() => {
          setLoading(false);
          navigate('/')
        },3000)
      } else {
        setLoading(false);
        console.error("Failed to submit data");
        console.log(result);
        alert("Failed to create account!");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="loginpage">
      <form className="form" onSubmit={handleSubmit}>
        <span>
          <IconGoback />
        </span>
        <h1>Sign up to Continue</h1>
        <div className="inputs">
          <input
            name="username"
            placeholder="Name"
            onChange={handleChange}
            value={formdata.username}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formdata.email}
          />
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formdata.password}
            />
            <i>
              <IconPassword />
            </i>
          </div>
          <input
            name="phoneNumber"
            placeholder="Phone number"
            onChange={handleChange}
            value={formdata.phoneNumber}
          />
          <label htmlFor="role">Choose a role:</label>
          <select
            id="role"
            name="role"
            value={formdata.role}
            onChange={handleChange}
          >
            <option value="">Select a role</option>
            <option value="admin">ADMIN</option>
            <option value="user">USER</option>
            <option value="artist">ARTIST</option>
          </select>
          <button className="createanaccount" type="submit">
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
