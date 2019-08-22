const path = require('path');

exports = module.exports = {
  port: 13337,
  env: 'dev',
  koaEjs: {
    root: path.join(__dirname, 'views'),
    layout: 'layouts/main',
    viewExt: 'ejs',
    cache: false,
    debug: false,
  },
  websockets: {
    enabled: true,
  },
};
