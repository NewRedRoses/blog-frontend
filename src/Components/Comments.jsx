import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";
import "../Styles/comments.css";
import { useEffect, useState } from "react";
import { MessageSquareDashed } from "lucide-react";

export default function Comments({ postId, backendUrl }) {
  const [comments, setComments] = useState([]);

  const commentsUrl = `${backendUrl}/comments`;

  useEffect(() => {
    fetch(commentsUrl)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [commentsUrl]);
  return (
    <>
      <h2>Comments</h2>
      <AddCommentForm url={commentsUrl} />
      {comments.length != 0 ? (
        <ul className="list-of-comments">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment
                  author={comment.username}
                  text={comment.text}
                  rawDate={comment.date_created}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="no-comments-message">
          <MessageSquareDashed className="no-comments-icon" />
          <span>No comments yet...</span>
        </div>
      )}
    </>
  );
}
