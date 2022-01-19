import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import { db } from "../firebase";


const Posts = () => {
  // using useCollection react-fierbase hook to get realtimePosts
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
      <div>
          {/* this is loading thats why using optional chaining (?) */}
      {realtimePosts?.docs.map((post) => (
      
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
  
};

export default Posts;
