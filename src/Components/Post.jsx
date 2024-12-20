import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import parse from "html-react-parser";
import { BookCheck, Shell } from "lucide-react";
import { format } from "date-fns";
import Spinner from "./Spinner";
import { Helmet } from "react-helmet";

export default function Post({ backendUrl }) {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "loading...",
    content: "",
    user: { name: "" },
    date_published: new Date(),
  });
  const url = `${backendUrl}posts/${postId}`;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .then(() => setLoading(false));
  }, [url]);

  return (
    <div className="content">
      <Helmet>
        <title>{post.title} - Lutheria</title>
      </Helmet>
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
      {isLoading ? (
        <Spinner msg="Loading Comments..." />
      ) : (
        <div className="comments-container">
          <Comments postId={postId} backendUrl={url} />
        </div>
      )}
    </div>
  );
}
