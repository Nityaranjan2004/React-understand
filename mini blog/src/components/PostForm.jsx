import { useState } from "react";

function PostForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: initialData.id || Date.now(),
      title,
      content
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 bg-gray-700"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full p-2 bg-gray-700"
      />

      <button className="bg-blue-500 px-4 py-2">
        Save
      </button>
    </form>
  );
}

export default PostForm;