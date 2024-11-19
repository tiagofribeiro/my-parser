import http from 'http';


const server = http.createServer((req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Server is up!' }))
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }))
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});