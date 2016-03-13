'use strict';

const chai = require('chai');
const chai_http = require('chai-http');
chai.use(chai_http);

const request = chai.request;
const expect = chai.expect;

const http = require('http');
const Router = require('./../lib/dead_simple');

describe('Router tests', () => {
  before(() => {
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
  });

  it('should respond to a GET request', (done) => {
    request('localhost:3000')
      .get('/')
      .end((err, res) => {
        if (err) throw err;
        expect(res.text).to.include('GET');
        done();
      });
  });

  it('should respond to a POST request', (done) => {
    request('localhost:3000')
      .post('/')
      .end((err, res) => {
        if (err) throw err;
        expect(res.text).to.include('POST');
        done();
      });
  });

  it('should respond to a PUT request', (done) => {
    request('localhost:3000')
      .put('/')
      .end((err, res) => {
        if (err) throw err;
        expect(res.text).to.include('PUT');
        done();
      });
  });

  it('should respond to a DELETE request', (done) => {
    request('localhost:3000')
      .delete('/')
      .end((err, res) => {
        if (err) throw err;
        expect(res.text).to.include('DELETE');
        done();
      });
  });
});
