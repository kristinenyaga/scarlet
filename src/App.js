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

  useEffect(()=>{
    // auto-login
    fetch("https://news-backend-production-5c64.up.railway.app/me", {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin":"no-cors",
        "Content-Type": "application/json"
      }
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[])
  const [news,setNews]=useState([])
  // const [categories,setCategories]=useState([])
  useEffect(() => {
    fetch("https://news-backend-production-5c64.up.railway.app/articles")
      .then((r) => r.json())
      .then((news) => {
        setNews(news);
      });
  }, []);

  function handleAddNews(newNews) {
    const updatedNews = [...news, newNews];
    setNews(updatedNews);
  }


  return (

    <>
   
    {
      user?(
        <>
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route exact path="/home" element={<Home news={news} setNews={setNews} />}/>
          <Route exact path="/write" element={<AddNews user={user} news={news} setNews={setNews} addArticle={handleAddNews} />}/>
          <Route exact path="/editprofile" element={<Profile user={user} setUser={setUser} />}/>
        </Routes>
        </>
       

      ):
      <Routes>
        <Route exact path="/scarlet" element={<LoginTest  setUser={setUser} />}/>
        <Route exact path="/register" element={<Register />} />

      </Routes>
    }
     
      {/* < NavBar /> */}
      
    </>
  );
}

export default App;
