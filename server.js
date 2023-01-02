const { addPost, getPosts, addLike, deletePost } = require("./post");

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

app.use(express.json());

app.use(cors());

app.use(express.static("public"));

app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});
