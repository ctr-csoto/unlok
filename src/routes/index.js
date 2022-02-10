const authApi = require('../components/auth');
const mediaApi = require('../components/media');
const paymentsApi = require('../components/payments');
const usersApi = require('../components/users');
const subscriptionsApi = require('../components/subscriptions');

module.exports = (app) => {
  authApi(app);
  mediaApi(app);
  paymentsApi(app);
  usersApi(app);
  subscriptionsApi(app);
  app.get("/", (req, res, next) => {
    res.status(200).send(`ok`);
  });
  app.use(function(req, res, next) {
    res.status(404).send(`Path ${req.originalUrl} not defined for method ${req.method}`);
  });
};
