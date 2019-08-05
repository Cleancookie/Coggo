const express = require("express");
const serverConfig = require("../server.config");
const BoneRouter = require("./BoneRouter");
const path = require("path");

class BoneServer {
	constructor() {
		this.app = express();
		this.init();
	}

	init() {
		this.initMiddleware();
		this.initRoutes();
		this.initViewEngine();
	}

	initViewEngine() {
		this.app.set("view engine", "ejs");
		this.app.use(express.static(path.join(__dirname, "..", "public")));
	}

	initMiddleware() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	initRoutes() {
		this.app.use(BoneRouter);
	}

	launchServer(port) {
		this.server = this.app.listen(port);
		console.log(`Listening on port ${port}`);
		return this.server;
	}
}

exports = module.exports = new BoneServer();
