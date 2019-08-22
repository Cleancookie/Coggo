const Koa = require("koa");
const BoneRouter = require("./BoneRouter");
const koaEjs = require("koa-ejs");
const json = require("koa-json");
const config = require("../server.config");

class BoneServer {
	constructor() {
		this.app = new Koa();
		this.init();
	}

	init() {
		this.initMiddleware();
		this.initViewEngine();
		this.initRoutes();
		if (config.websockets.enabled) {
			this.initWebsockets();
		}
	}

	initWebsockets() {
		this.http = require("http").createServer(this.app.callback());
		this.io = require("socket.io")(this.http);

		this.io.on("connection", (socket) => {
			console.log(`User(${socket.id}) has connected`);
		});
	}

	initViewEngine() {
		koaEjs(this.app, config.koaEjs);
	}

	initMiddleware() {
		this.app.use(json());
	}

	initRoutes() {
		this.app.use(BoneRouter.routes()).use(BoneRouter.allowedMethods());
	}

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

exports = module.exports = new BoneServer();
