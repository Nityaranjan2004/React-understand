import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "../components/PostCard";

function Home() {
  const { posts } = useContext(PostContext);

  return (
    <div className="grid gap-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;