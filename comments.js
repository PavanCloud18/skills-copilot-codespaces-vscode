// Create web server
// Create a web server that listens to requests on port 3000. For the time being, the server does not need to do anything other than log the requests to the console.

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  res.end()
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
// Run the server
// Run the server and test it by making a request to http://localhost:3000/ in your browser. You should see the request logged to the console.