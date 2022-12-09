import "./addnews.css"
import { useState } from "react";
export default function AddNews({user,news,setNews,addArticle}){
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [title, setTitle] = useState("");
  const userId = user.id

  function handleSubmit(e) {
   
    e.preventDefault();
    fetch("/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        rating,
        image_url:image_url,
        content,
        title,
        user_id:userId
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((article) => {
          addArticle(article)
          clearData()
        });
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  function clearData(){
    setCategory("")
    setRating("")
    setContent("")
    setImage_Url("")
    setTitle("")
  }

  return(
    <div className="write">
     <div className="main-block">
      <h1>Add News</h1>
      <form action="/" onSubmit={handleSubmit}>
        <div className="info">
          <input  type="text" name="name" placeholder="Full name" value={user.firstname}/>
          <input type="text" className="email" placeholder="Email" value={user.email}/>
          <input type="text" name="title" placeholder="Title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}/>
           
           
        <input type="text" name="image_url" placeholder="image_url"
           value={image_url}
           onChange={(e) => setImage_Url(e.target.value)}/>

          <input type="text" name="category" placeholder="category"
           value={category}
           onChange={(e) => setCategory(e.target.value)}/>

        <select
           value={rating}
           onChange={(e) => setRating(e.target.value)}>
            {/* <option value="rating" disabled selected>Rating</option> */}
            <option value="1">Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
             
          
        </div>
        <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        <div className="writeFormGroup">
          
        </div>
        
      
      
        <button  className="button">Submit</button>
      </form>
    </div>
      </div>

   
  )
}