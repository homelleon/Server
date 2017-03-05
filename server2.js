const catberry = require('catberry');
const RestApiClient = require('./lib/RestApiClient');
const express = require('express');
const config = require('./server-config');
const cat = catberry.create(config);
const app = express();

// when you have created an instance of the Catberry application
// you can register anything you want in the Service Locator.
// last "true" value means that the instance of your service is a singleton
cat.locator.register('restApiClient', RestApiClient, true);

// you can register services only before this method below
app.use(cat.getMiddleware());
// now Catberry already has initialized the whole infrastructure of services
app.use(connect.errorHandler());
http
    .createServer(app)
    .listen(config.server.port || 3000);