const http = require("http");

//file

//server
const servere = http.createServer((req, res) => {
  res.end("hello from server");
});

servere.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 127 ");
});
