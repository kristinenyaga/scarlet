import "./sidebar.css"
import {useState,useEffect} from 'react'
export default function SideBar(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return(
    <div className="sidebar">
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">About Me</span>
        <img
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt=""></img>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle font-beutify">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">
            style
          </li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
      </ul>
      </div>

      {/* <div className="sidebarItem"> */}
        <span className="sidebarTitle font-beutify">USERS</span>
        <ul className="namesUl">
        {users.map(user => <li key={user.id}className="usersNames">{user.firstname}</li>)}

        </ul>
        
      {/* </div> */}

    </div>
  )
}