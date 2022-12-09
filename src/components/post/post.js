import "./post.css"

export default function Post({news,onDelete}){

  function handleDelete(id) {
    fetch(`https://news-backend-production-5c64.up.railway.app/articles/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDelete(id);
      }
    });
  }
  return(
   <div className="post">
      <img className="postImg"
      src={news.image_url} alt="">
      </img>
      <div className="postInfo">
      <span  className="postTitle">
          {news.title}
        </span>
        {/* <div className="postcats">
          {news.content}

        </div>
         */}
        <hr/>
        <span className="postDate">{news.category}</span>
         
      </div>
      <p className="postDesc">
      {news.content}
      </p>
      <button className="myBtn" onClick={()=>handleDelete(news.id)}>remove</button>

      <h2 className="posttitle">written by...</h2>
      <div className="displayflex">
        <img className="imagepost"
        src={news.user.image_url}
        ></img>
      <p className="firstname">{news.user.firstname}</p>
      </div>
      <p className="description">~~{news.user.description}</p>
   </div>
  )
}