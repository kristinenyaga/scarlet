import "./profile.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Profile({user,setUser}){
 const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [image_url, setImage_Url] = useState("");
const navigate=useNavigate()
function handleLogoutClick() {
  fetch("https://news-backend-production-5c64.up.railway.app/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      setUser(null);
      navigate("/scarlet")
    }
  });
}
  function handleSubmit(e){
    e.preventDefault();
    fetch(`https://news-backend-production-5c64.up.railway.app/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        image_url,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          alert("you have to login again")
          setUser(null)
          handleLogoutClick()
          navigate("/scarlet")
        });
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });

  }
  return(
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
              <h2 className="settingsUpdateTitle">Update Your Account</h2>
              <span className="settingsDeleteTitle">you must provide all the details</span>

            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label>Profile Picture</label>
              <h1>{user.firstname} {user.lastname}</h1>
              <div className="settingsPP">
                <img
                src={user.image_url}alt="">
                </img>
              </div>
              <label>First Name</label>
              <input type="text" 
               value={firstname}
               onChange={(e) => setFirstname(e.target.value)}></input>
              <label>Last Name</label>
              <input type="text" 
               value={lastname}
               onChange={(e) => setLastname(e.target.value)}></input>
              <label>Email</label>
              <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
              <label>image_url</label>
              <input type="image_url"
               value={image_url}
               onChange={(e) => setImage_Url(e.target.value)} ></input>
              <button className="settingsBtn">Update</button>
            </form>
        </div>
    </div>
  )
}