//const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;


let app = express();

app.get('/', (req, res)	 => {
	res.send('hello');
});

app.get('/about', (req, res)	 => {
	res.send('about');
});

app.post('/', (req, res) => {
	res.send('post');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/