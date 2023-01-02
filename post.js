const { Client } = require("pg");

const connectionData = {
  host: "localhost",
  user: "postgres",
  database: "likeme",
  password: "44182",
  port: 5433,
};
const clientDB = new Client(connectionData);

const addPost = async (titulo, url, descripcion) => {
  const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, url, descripcion];
  const result = await pool.query(query, values);
  console.log(" Tu post ha sido agregado");
};

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};

const addLike = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

const deletePost = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

module.exports = { addPost, getPosts, addLike, deletePost };


