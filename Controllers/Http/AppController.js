"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
class AppController {
    /**
     * Base HTTP controller
     *
     * @param String controllerName
     */
    constructor(name = 'App') {
        this.name = name;
        this.router = Express.Router();
    }
}
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map