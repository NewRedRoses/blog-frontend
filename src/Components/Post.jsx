import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="content">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
