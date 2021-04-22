module.exports = {
  name: 'health',
  routes: {
    'GET /api/ping': 'ping',
  },
  actions: {
    ping({ res }) {
      res.send('pong');
    },
  },
};
