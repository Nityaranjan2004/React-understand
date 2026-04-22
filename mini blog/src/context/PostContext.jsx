import React from 'react'
import { createContext,useState,useEffect } from 'react'
import { getPosts, savePosts } from "../utils/localStorage";

export const PostContext = createContext();

export const PostProvider = ({children})=>{
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        setPosts(getPosts())
    },[])

    // save whenever data changes
  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  // CRUD operations
  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
}
