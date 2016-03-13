# dead_simple

A simple, REST-compliant router for use with Node's http module.

## Installation

    npm install dead_simple

## Example

Here's a simple test server setup you can use while you're
wiring things together:

    'use strict';

    const http = require('http');
    const Router = require('dead_simple');

    var router = new Router();

    router.get('/', (req, res) => {
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
