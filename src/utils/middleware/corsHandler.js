const cors = require('cors');
const { config } = require('../../config/index');

function corsHandler() {
  if (config.dev) return cors(`${config.cors}`);
  const corsOptions = { origin: `${config.cors}` };
  return cors(corsOptions);
}

module.exports = corsHandler;
