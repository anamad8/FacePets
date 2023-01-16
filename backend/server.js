const express = require("express");
const server = express();
const port = 3030;
const cors = require("cors");
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/user", require("./routes/user.routes"));
server.use("/uploads", express.static("uploads"));
server.use("/post", require("./routes/post.routes"));
server.use("/comment", require("./routes/comment.routes"));


server.get("/", function (req, res) {
  res.send("hola mundo");
});

server.listen(port, function () {
  console.log("Servidor corriendo por puerto " + port);
});
