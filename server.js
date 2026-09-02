const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Azure Learning App</h1>
    <h2>Deployment Successful!</h2>
    <p>My Node.js application is running on Azure App Service.</p>
  `);
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
