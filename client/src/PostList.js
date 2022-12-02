import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import axios from "axios";

const Postlist = () => {
  const [posts, setPosts] = useState({});

  //we are still creating comment and post with the post service and comment service
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    // console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    // console.log(post);
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  //   console.log(renderedPosts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default Postlist;

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

// The Object.values() method returns an array of a given object's own
// enumerable property values, in the same order as that provided by a
// for...in loop. (The only difference is that a for...in loop enumerates
// properties in the prototype chain as well.)
