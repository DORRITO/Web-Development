const http = require('http');

const server = http.createServer((req, res) => {

    const user = {
        name: 'John',
        hobby: 'skating'
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user))
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Hellooooooooooo</h1>')
})

server.listen(3000);