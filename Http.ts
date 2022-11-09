import http, { ServerResponse, IncomingMessage } from "http";

const PORT: number = 2022;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>): void => {
    res.writeHead(200);
    res.write("My Server is Up and Running 🔐😍🔑");
    res.end();
  }
);

server.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
