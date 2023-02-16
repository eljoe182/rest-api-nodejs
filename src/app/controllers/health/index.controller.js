class HealthController {
  static health(_req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
      status: 'success',
      data: {
        message: 'API is healthy',
      },
    }));
  }
}

module.exports = HealthController;
