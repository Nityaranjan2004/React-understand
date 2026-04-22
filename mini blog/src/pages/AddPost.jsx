import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    addPost(post);
    navigate("/");
  };

  return <PostForm onSubmit={handleSubmit} />;
}

export default AddPost;