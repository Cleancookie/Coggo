"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const HomeController_1 = require("../Controllers/Http/HomeController");
class BoneRouter {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
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
