var connect = require('connect');
process.setMaxListeners(0);
connect()
    .use(connect.static('./'))
    .listen(8000);

console.log('Listening on port 8000.');
