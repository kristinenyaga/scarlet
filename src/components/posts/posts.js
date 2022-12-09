import Post from "../post/post"
import "./posts.css"
import { useEffect,useState } from "react";

export default function Posts({news,selectedCategory,setNews}){

  const displayedArticles = news.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  );

  function onDelete(id){
    console.log(id)
    const updatedNews = news.filter((mynews) => mynews.id !== id);
    setNews(updatedNews);
  }
  return(
   <>
    <div className="posts">
      {displayedArticles.map((news) => (
          <Post key={news.id} news={news} onDelete={onDelete} />
        ))}


    </div>
   </>
   
  )
}