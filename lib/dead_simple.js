'use strict';

var dead_simple = module.exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {}
  };
};

dead_simple.prototype.get = function(route, cb) {
  this.routes.GET[route] = cb;
};

dead_simple.prototype.post = function(route, cb) {
  this.routes.POST[route] = cb;
};

dead_simple.prototype.put = function(route, cb) {
  this.routes.PUT[route] = cb;
};

dead_simple.prototype.delete = function(route, cb) {
  this.routes.DELETE[route] = cb;
};

dead_simple.prototype.route = function() {
  return (req, res) => {
    var routeFunction = this.routes[req.method][req.url];
    routeFunction(req, res);
  };
};
