import './App.css';
import React from 'react';
import { useState,useEffect } from "react";
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import LoginTest from './components/Login/loginTest';
import AddNews from './components/addnews/addnews';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (

    <>
   
    {
      user?(
        <>
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/write" element={<AddNews user={user} />}/>
          <Route exact path="/editprofile" element={<Profile user={user} />}/>
        </Routes>
        </>
       

      ):
      <Routes>
        <Route exact path="/scarlet" element={<LoginTest  setUser={setUser} />}/>
        <Route exact path="/scarlet/register" element={<Register />} />

      </Routes>
    }
     
      {/* < NavBar /> */}
      
    </>
  );
}

export default App;
