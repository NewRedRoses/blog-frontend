import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import parse from "html-react-parser";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({ title: "", content: "" });
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="content">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-body">{parse(post.content)}</div>

      <div className="comments-container">
        <Comments postId={postId} />
      </div>
    </div>
  );
}
