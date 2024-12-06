import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import parse from "html-react-parser";
import { BookCheck, Shell } from "lucide-react";
import { format } from "date-fns";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "loading...",
    content: "",
    user: { name: "" },
    date_published: new Date(),
  });
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="content">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-details">
          <div className="post-author" aria-label="author">
            <Shell className="profile-picture" />
            {post.user.name}
          </div>
          <div className="post-date-published" aria-label="date published">
            <BookCheck />
            {format(post.date_published, "PP (p)")}
          </div>
        </div>
      </div>
      <div className="post-body">{parse(post.content)}</div>

      <div className="comments-container">
        <Comments postId={postId} />
      </div>
    </div>
  );
}
