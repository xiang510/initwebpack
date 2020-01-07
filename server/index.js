var express = require("express");
var app = express();
app.use(express.static("dist"));
app.listen(3000, () => {
  console.log("服务开启在3000端口");
});
