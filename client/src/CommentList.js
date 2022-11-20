// import { useState, useEffect } from "react";
// import axios from "axios";

const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );

  //     setComments(res.data);
  //   };
  //   fetchData();
  // }, [postId]);

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
