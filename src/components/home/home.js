import { useState,useEffect } from "react"
import Header from "../header/header"
import Posts from "../posts/posts"
import SideBar from "../sidebar/sidebar"
import "./home.css"

export default function Home({news,setNews}){
  const [selectedCategory, setSelectedCategory] = useState("All");

  
    
  const categories = news
  .map((mynews) => mynews.category)
  .filter(
    (category, index, categories) => categories.indexOf(category) === index
  )
  .sort();

  // const displayedArticles = articles.filter(
  //   (movie) => selectedCategory === "All" || movie.category === selectedCategory
  // );

  return(
    <>
      <Header />

    <div className="home">
      <Posts selectedCategory={selectedCategory} news={news} setNews={setNews}/>
      <SideBar 
       categories={["All", ...categories]}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}/>
    </div>
    </>
    
  )
}