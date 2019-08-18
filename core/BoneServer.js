const Koa = require("koa");
const BoneRouter = require("./BoneRouter");
const koaEjs = require("koa-ejs");
const json = require("koa-json");
const path = require("path");

class BoneServer {
	constructor() {
		this.app = new Koa();
		this.init();
	}

	init() {
		this.initMiddleware();
		this.initViewEngine();
		this.initRoutes();
	}

	initViewEngine() {
		koaEjs(this.app, {
			root: path.join(__dirname, "..", "views"),
			layout: "layouts/main",
			viewExt: "ejs",
			cache: false,
			debug: false,
		});
	}

	initMiddleware() {
		this.app.use(json());
	}

	initRoutes() {
		this.app.use(BoneRouter.routes()).use(BoneRouter.allowedMethods());
	}

	launchServer(port) {
		this.server = this.app.listen(port);
		console.log(`Listening on port ${port}`);
		return this.server;
	}
}

exports = module.exports = new BoneServer();
