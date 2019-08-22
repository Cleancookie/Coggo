const Koa = require('koa');
const koaEjs = require('koa-ejs');
const json = require('koa-json');
const Http = require('http');
const socketio = require('socket.io');
const BoneRouter = require('./BoneRouter');
const config = require('../server.config');

/**
 * Bone web server framework
 */
class BoneServer {
  constructor() {
    this.app = new Koa();
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
    this.http = Http.createServer(this.app.callback());
    this.io = socketio(this.http);

    this.io.on('connection', socket => {
      console.log(`User(${socket.id}) has connected`);
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
    if (config.websockets.enabled) {
      this.server = this.http.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });
    } else {
      this.server = this.app.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });
    }

    return this.server;
  }
}

module.exports = new BoneServer();
