import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./navbar.css"
import { useNavigate } from "react-router-dom";


function NavBar({user,setUser}) {
  const nav = useNavigate();

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          nav("/")
        }
      });
    }

  return (
    <>
     
      <Navbar bg="light" variant="light">
        <Container className='display-flex'>
          <Navbar.Brand className='scarlet'>Scarlet</Navbar.Brand>
          <Nav className="me-auto rightside" >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/write">Add News</Nav.Link>
            <Nav.Link as={Link} to="/editprofile">ChangeProfile</Nav.Link>
            <button className='logoutBtn' onClick={handleLogoutClick}>
          Logout
        </button>

          </Nav>
       
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;