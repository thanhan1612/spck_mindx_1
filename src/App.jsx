import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Discover from './SideBar/Discover/Discover.jsx';
import Menu from './SideBar/Menu/Menu';
import Navbar from './Homepage/Navbar/Navbar';
import Slideshow from './Homepage/Slideshow/Slideshow';
import Topsong from './Homepage/Topsong/Topsong';
import LoadingPage from './LoadingPage/LoadingPage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import SignUp from './SignUp/SignUp.jsx';
import { Myprovider } from '../context.jsx';
import './App.css';
import Albums from './SideBar/Albums/Albums.jsx';
import Artists from './SideBar/Artists/Artists.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [login,setLogin] = useState(false);
  const [signup,setSignup] = useState(false);
  const [user,setUser] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);
  

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <LoadingPage />
        </div>
      ) : (
        <Myprovider>
          <div className="melodies_web">
         
              <Content login = {login} setLogin = {setLogin} signup = {signup} setSignup = {setSignup} setUser={setUser} user = {user} />
         
          </div>
        </Myprovider>
      )}
    </div>
  );
};

// Custom Content component to access location
const Content = ({login,setLogin,signup,setSignup,setUser,user}) => {
  const location = useLocation();
 
  // Determine if we are on login or signup page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
   
       
  
   
      {!isAuthPage && (
        
          <div className="sidebar">
             <h1>Melodies</h1>
              <div className="menu">
                 <Menu />
              </div>
          </div>
          
     
      
      )}

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                 <Navbar login = {login} setLogin={setLogin} signup = {signup} setSignup = {setSignup} user = {user} />
                <Slideshow />
                <Topsong />
              </>
            }
          />
          
            <Route path="/login" element={<LoginPage setLogin={setLogin} setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setSignup = {setSignup} setUser={setUser}/>} />
            
          <Route path = "/discover" element = {
            <>
            
            <Navbar login = {login} setLogin={setLogin} signup = {signup} setSignup = {setSignup}/>
            <Discover />
            </>} />
            <Route path = "/album" element = {
              <>
              
              <Albums />
              </>
            } />
            <Route path = "/artist" element = {
              <>
              <Artists />
              </>
            } />
        </Routes>
      </div>
    </>
  );
};

export default App;
