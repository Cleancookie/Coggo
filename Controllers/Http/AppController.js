'use strict';

class AppController {
    /**
     * Base Controller that all classes should extend from
     * 
     * @param String controllerName 
     */
    constructor(controllerName = 'App') {
        this.ControllerName = controllerName;
        this.express = require('express');
        this.router = this.express.Router();
    }
}

module.exports = AppController;