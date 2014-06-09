var connect = require('connect');
process.setMaxListeners(0);
connect()
    .use(connect.static('./bucketadmin/themeforest/BucketAdmin/html'))
    .listen(8000);

console.log('Listening on port 8000.');
