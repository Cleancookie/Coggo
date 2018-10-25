"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const HomeController_1 = require("../Controllers/Http/HomeController");
class BoneRouter {
    constructor() {
        // I am a Singleton, and ready to mingle
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
        // Add routes here
        let homeController = new HomeController_1.HomeController();
        this.router.get('/', (req, res) => homeController.homepage(req, res));
    }
    static get Instance() {
        return (this._instance || (this._instance = new this()));
    }
    get Routes() {
        return this.router;
    }
}
exports.BoneRouter = BoneRouter;
//# sourceMappingURL=Routes.js.map