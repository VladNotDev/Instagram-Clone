import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = React.useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          profilePicture={post.data().profileImg}
          postImage={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
