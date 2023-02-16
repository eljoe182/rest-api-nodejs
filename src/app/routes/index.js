const url = require('url');
const HealthController = require('../controllers/health/index.controller');
const FindByIdRestaurantController = require('../controllers/restaurant/findBy.controller');
const RestaurantIndexController = require('../controllers/restaurant/index.controller');

const routes = async function (req, res) {
  const urlParse = url.parse(req.url, true);
  req.query = urlParse.query;
  const params = urlParse.href.match(/^\/restaurants\/show\/([^/]+)$/) || [];

  if (urlParse.href === '/') {
    res.write('Hello World');
    return res.end();
  }

  if (urlParse.href === '/health') {
    return HealthController.health(req, res);
  }

  if (urlParse.href.match(/^\/restaurants(?:\?(?:\w+=\w+&)*\w+=\w+)?$/)) {
    return RestaurantIndexController.run(req, res);
  }

  if (urlParse.href.match(/^\/restaurants\/show\/([^/]+)$/)) {
    const idParams = {
      id: params[1] || '',
    };
    req.params = idParams;
    return FindByIdRestaurantController.run(req, res);
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      status: 'error',
      message: 'Not found',
    }),
  );
};

module.exports = routes;
