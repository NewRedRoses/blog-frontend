import { formatDistanceStrict } from "date-fns";
export default function Comment({ author, text, rawDate }) {
  const date = new Date(rawDate);
  const dateSince = formatDistanceStrict(date, new Date());
  return (
    <div className="comment-container">
      <div className="comment-top-container">
        <div className="comment-author-content">{author}</div>
        <div className="comment-date-container">{dateSince} ago</div>
      </div>
      <div className="comment-bottom-container">{text}</div>
    </div>
  );
}
