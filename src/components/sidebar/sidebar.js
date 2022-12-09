import "./sidebar.css"
import {useState,useEffect} from 'react'
export default function SideBar({ categories, selectedCategory, setSelectedCategory }){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://news-backend-production-5c64.up.railway.app/users")
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
        <span className="sidebarTitle font-beutify">CHOOSE CATEGORY</span>
        <ul className="sidebarList">
          {categories.map((category)=>(
            <li className='sidebarListItem'key={category}
            onClick={() => setSelectedCategory(category)}>{category}</li>
          ))}
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