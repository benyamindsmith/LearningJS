http = require('http');
                                 //request, result
const server = http.createServer((req, res) => { 
    if (req.url === '/'){
        res.end('Welcome to the home page')
    }

    if (req.url === '/about') {
        res.end('This is the about page')
    }

    res.end(`<p>404.</p>
    <a href="/"> Back home</a>`)
});

server.listen(5000)
// go to localhost:5000- We have made a website!
