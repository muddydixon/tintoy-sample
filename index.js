const http = require("http");
const express = require("express");
const app = express();
app.get("/*", (req, res)=>{
  res.json({path: req.url, method: req.method});
});
const server = http.createServer(app);
server.listen(8080);
server.on("listening", ()=>{
  console.log("on lisntening");
});
