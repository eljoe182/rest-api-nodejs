const server = require('./src/app/Server');

function main() {
  server.instance().listen(server.port, () => {
    console.log(`Server is listening on port: ${server.port}`);
  });
}

main();
