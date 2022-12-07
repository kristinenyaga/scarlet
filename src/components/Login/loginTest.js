import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logintest.css"
export default function LoginTest({ setUser }) {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    function handleClick(){
      nav("/register")
    }
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) =>{
          setUser(user)
          nav("/home")
          }
          );
        } else {
          r.json().then((err) => alert(err.errors));
        }
      });
    }


    return (
    <>
    <h1 className="loginNews">SCARLET NEWS APP</h1>
      <div className="loginTest">
        <div>
          <img className="loginImg"
          src="https://images.unsplash.com/photo-1632062549850-44a0a6eede16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          </img>
        </div>
        <form onSubmit={handleSubmit} className="loginForm">
          <h1 className="loginTitle">Login</h1>
          {/* <label htmlFor="email">Email</label> */}
          {/* <br></br> */}
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            className="email"
            placeholder="email..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          {/* <label htmlFor="password">Password</label> */}
          {/* <br></br> */}
          <input
            type="password"
            id="password"
            className="password"
            autoComplete="current-password"
            value={password}
            placeholder="password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btnflex">
          <button className="loginbtn" type="submit">Login</button>
          <button className="loginbtn" type="submit" onClick={handleClick}>Signup</button>
          </div>
        
        </form>
      </div>
    </>

    );
  }