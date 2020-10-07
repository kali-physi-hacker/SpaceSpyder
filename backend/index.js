const http = require('http');

const config = require('./helpers/config');
const app = require('./app');


const server = http.createServer(app);

const PORT = config.PORT;
server.listen(PORT, ()=> console.log(`Server stared listening on PORT: ${PORT}`));