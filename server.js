const express = require("express");
const path = require("path");
const app = express();


// 정적 폴더 경로 설정: /view/public
app.use("/public", express.static(path.resolve(__dirname, "view", "public")));
// __filename: file명을 포함한 절대 경로
// __dirname: file명을 제외한 절대 경로

// 어떤 요청이 들어오든 index.html에 전부 전송한다.
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"view","index.html"));
});

app.listen(8080, () => console.log("Server running..."));
