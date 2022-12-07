import { useNavigate } from "react-router-dom"
import "./register.css"
import {useState} from 'react'



export default function Register(){
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [description, setDescription] = useState("");
const [email, setEmail] = useState("");
const [image_url, setImage_Url] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()
  function handleClick(){
    // navigate("/")
  }

  function handleSubmit(e) {
   
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        image_url:image_url,
        password,
        password_confirmation: passwordConfirmation,
        description,
        email,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          navigate("/")
        });
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }
  return(
    <div>
      <div className="container">
      
      <form className="register" onSubmit={handleSubmit}>
       
        <div className="ui divider"></div>
        <div className="register-box">
        <h2 className="signTitle">Signup</h2>
          <div className="user-box">
           
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              className='input-field'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className='input-field'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
               <input
              type="text"
              name="image_url"
              placeholder="image_url"
              className='input-field'
              value={image_url}
              onChange={(e) => setImage_Url(e.target.value)}
            />
               <input
              type="text"
              name="description"
              placeholder="describe_yourself"
              className='input-field'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className='input-field'
              value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="user-box">
          <input
            type="password"
            id="password_confirmation"
            placeholder="confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
                
          </div>
       
          <div className='display-flex'>
          <button className="btn btn-dark" onClick={handleClick} >{isLoading ? "Loading..." : "Sign Up"}</button>
    
    
          </div>
        </div>
      </form>
    </div>

    </div>
  )
}