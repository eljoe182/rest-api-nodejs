const http = require('http');
const config = require('./config');
const routes = require('./routes');

class Server {
  #server;
  constructor() {
    this.port = config.PORT;
    this.#server = http.createServer(routes);
  }

  instance() {
    return this.#server;
  }
}

module.exports = new Server();
