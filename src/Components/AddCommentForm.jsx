export default function AddCommentForm({ url }) {
  return (
    <form action={url} method="POST" className="add-comment-form">
      <label htmlFor="username">Your Name:</label>
      <input type="text" name="username" required />

      <label htmlFor="message">Your Message:</label>
      <textarea name="message" id="message" required></textarea>
      <button type="submit" className="add-comment-btn">
        Submit
      </button>
    </form>
  );
}
