import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(`http://posts.com/posts/${postId}/comments`, {
        content,
      })
      .catch((err) => {
        console.log(err.message);
      });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Add Your Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default CommentCreate;
