import Header from "../header/header"
import Posts from "../posts/posts"
import SideBar from "../sidebar/sidebar"
import "./home.css"
export default function Home(){
  return(
    <>
      <Header />

    <div className="home">
      <Posts />
      <SideBar />
    </div>
    </>
    
  )
}