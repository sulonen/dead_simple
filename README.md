# dead_simple

A simple, REST-compliant router for use with Node's http module.

## Installation

    npm install dead_simple

## Example

Here's a simple test server setup you can use while you're
wiring things together. This code will create an http server
that listens on port 3000. Just copy this into a file called
'server.js' (or whatever you prefer). You can then run the
server with ```node server.js```.

Then you can use a command-line utility (like curl) to test
that your server is working. For example:
    
    curl -X GET localhost:3000

should return 'GET route hit'.

It should respond to all of the REST request methods with a
similar message.

    'use strict';

    const http = require('http');
    const Router = require('dead_simple');

    var router = new Router();

    router.get('/', (req, res) => {
      // do stuff
      res.write('GET route hit');
      res.end();
    });

    router.post('/', (req, res) => {
      res.write('POST route hit');
      res.end();
    });

    router.put('/', (req, res) => {
      res.write('PUT route hit');
      res.end();
    });

    router.delete('/', (req, res) => {
      res.write('DELETE route hit');
      res.end();
    });

    http.createServer(router.route()).listen(3000);

## License

MIT
