export default function Comment({ author, text, date }) {
  return (
    <div className="comment-container">
      <div className="comment-top-container">
        <div className="comment-author-content">{author}</div>
        <div className="comment-date-container">{date}</div>
      </div>
      <div className="comment-bottom-container">{text}</div>
    </div>
  );
}
