const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.resolve(__dirname, "view", "public")));
// __filename: file명을 포함한 절대 경로
// __dirname: file명을 제외한 절대 경로

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"view","index.html"));
});

app.listen(8080, () => console.log("Server running..."));
