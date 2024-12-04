import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";
import "../Styles/comments.css";

export default function Comments() {
  const comments = [
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
  return (
    <>
      <h2>Comments</h2>
      <AddCommentForm />
      <ul className="list-of-comments">
        {comments.map((comment, index) => {
          return (
            <li key={index}>
              <Comment
                author={comment.user}
                text={comment.msg}
                date={mockDate.toDateString()}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
