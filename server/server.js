const app = require('./app');

let server;
const PORT = process.env.port || 5000;
const HOST = process.env.host || 'localhost';

if (process.env.production) {
    const https = require('https');
    server = https.createServer(app);
} else {
    const http = require('http');
    server = http.createServer(app);
}

if (app.get('env') === 'production') {
    console.log('Production server');
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}  

server.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}`);
});
