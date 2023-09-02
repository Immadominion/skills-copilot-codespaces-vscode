// Create web server


// Import the 'http' module
const http = require('http');

// Define the port on which the server will listen
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
