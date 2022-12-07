import Post from "../post/post"
import "./posts.css"
import { useEffect,useState } from "react";

export default function Posts(){
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then((news) => {
        setNews(news);
      });
  }, []);
  return(
   <>
    <div className="posts">
      {news.map((news) => (
          <Post key={news.id} news={news} />
        ))}


    </div>
   </>
   
  )
}