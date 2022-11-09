const http = require("http");
const PORT = 2022;

const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("Server is Up and Running ✅😍");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
