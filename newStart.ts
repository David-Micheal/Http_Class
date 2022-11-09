import http from "http";

const PORT = 2022;

let data = [
  { id: 1, name: "David", stack: "Full-Stack" },
  { id: 2, name: "Micheal", stack: "Front-End" },
  { id: 3, name: "Segun", stack: "Project-Management" },
];

const myData = "I am ready to punch";

const app = http.createServer(
  (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => {
    if (req.method === "GET" && req.url === "/" && res.statusCode === 200) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(data));
      res.end();
    }
    res.end();
  }
);

app.listen(PORT, () => {
  console.log(`we are ready to punch`);
});
