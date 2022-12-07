const express = require("express");
const bodyparser = require("body-parser");
const { randomBytes } = require("crypto");

const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(bodyparser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", async (req, res) => {
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

  await axios.post("http://event-bus-srv:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

//receiving any events coming from the event bus
app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("V1");
  console.log("Listening on 4000");
});
