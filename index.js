const server = require('./server');
const {get} = server.router;

server.get({port: 8000},[
    get('/', ctx => 'Hello World' )
]);