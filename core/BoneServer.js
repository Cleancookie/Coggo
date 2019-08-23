const Koa = require('koa');
const koaEjs = require('koa-ejs');
const json = require('koa-json');
const IO = require('koa-socket');
const BoneRouter = require('./BoneRouter');
const config = require('../server.config');

/**
 * Bone web server framework
 */
class BoneServer {
  constructor() {
    this.app = new Koa();
    this.io = new IO();
    this.init();
  }

  /**
   * Power up lifecycle methods
   */
  init() {
    this.initMiddleware();
    this.initViewEngine();
    this.initRoutes();
    if (config.websockets.enabled) {
      this.initWebsockets();
    }
  }

  /**
   * Initialise websocket functionality
   */
  initWebsockets() {
    this.io.attach(this.app);
    this.app.io.on('connection', ctx => {
      console.log(`User ${ctx.socket.id} connected`);
    });
  }

  /**
   * Setup EJS
   */
  initViewEngine() {
    koaEjs(this.app, config.koaEjs);
  }

  /**
   * Setup middleware
   */
  initMiddleware() {
    this.app.use(json());
  }

  /**
   * Load routes files
   */
  initRoutes() {
    this.app.use(BoneRouter.routes()).use(BoneRouter.allowedMethods());
  }

  /**
   * Launches server
   *
   * @param {number} port
   * @returns {import('http').Server}
   */
  launchServer(port) {
    this.server = this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });

    return this.server;
  }
}

module.exports = new BoneServer();
