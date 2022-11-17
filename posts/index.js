const bodyparser = require("body-parser");
const { randomBytes } = require("crypto");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(bodyparser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;
  //adding id to the lists of the posts
  //   {
  //     "7f0123ff": {
  //         "id": "7f0123ff"
  //        "title": "Post Title"`
  //     }
  //  }

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
