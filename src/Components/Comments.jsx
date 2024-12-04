import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";
import "../Styles/comments.css";
import { useEffect, useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const url = `http://localhost:3000/posts/${postId}` + `/comments`;
  const data = [
    { msg: "wow this is sooo true", user: "Heimerdinger" },
    { msg: "sample test", user: "sample guy" },
    { msg: "reddit moment", user: "annoying guy" },
    { msg: "Skibidi toilet", user: "skibidi toilet" },
    {
      msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo assumenda distinctio. Hic inventore et repellendus pariatur sit itaque eum nemo laboriosam consequuntur a modi cum, voluptatem similique ipsam cupiditate?",
      user: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, amet?",
    },
  ];
  const mockDate = new Date();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [url]);
  return (
    <>
      <h2>Comments</h2>
      <AddCommentForm />
      {comments.length != 0 ? (
        <ul className="list-of-comments">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Comment
                  author={comment.username}
                  text={comment.text}
                  date={comment.date_created}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="no-comments-message">
          This post does not have any comments.
        </div>
      )}
    </>
  );
}
