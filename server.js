const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});