import Comment from "./Comment";

export default function Comments() {
  const comments = [
    { msg: "wow this is sooo true", user: "Heimerdinger" },
    { msg: "sample test", user: "sample guy" },
    { msg: "reddit moment", user: "annoying guy" },
    { msg: "Skibidi toilet", user: "skibidi toilet" },
  ];
  const mockDate = new Date();
  return (
    <>
      <h2>Comments</h2>
      <p>these are where the comments will be held</p>
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
    </>
  );
}
