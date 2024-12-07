import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddCommentForm({ url, comments, setComments }) {
  const [form, setForm] = useState({ username: "", message: "" });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    options.body = JSON.stringify(form);
    // Submit POST request
    await fetch(url, options);
    // Refresh (ideally use states but that will be for ... later)
    navigate(0);
  }
  return (
    <form
      action={url}
      method="POST"
      className="add-comment-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Your Name:</label>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <label htmlFor="message">Your Message:</label>
      <textarea
        name="message"
        id="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      ></textarea>
      <button type="submit" className="add-comment-btn">
        Submit
      </button>
    </form>
  );
}
