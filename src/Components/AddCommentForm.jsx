import { useState } from "react";
export default function AddCommentForm({ url }) {
  const [form, setForm] = useState({ username: "", message: "" });

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
    window.location.reload(false);
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
      {console.log}
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
