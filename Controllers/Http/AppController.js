"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class AppController {
    /**
     * Base HTTP controller
     *
     * @param String controllerName
     */
    constructor(name = 'App') {
        this.name = name;
        this.router = express.Router();
    }
}
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map