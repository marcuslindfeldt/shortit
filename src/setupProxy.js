const proxy = require('http-proxy-middleware');

// Proxy /api requests to server in development
// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
module.exports = function apiProxy(app) {
  app.use(proxy('/api', { target: 'http://localhost:4000/' }));
};
