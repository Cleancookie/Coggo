'use strict';

class AppController {
    /**
     * Base HTTP controller
     * 
     * @param String controllerName 
     */
    constructor(name = 'App') {
        this.name = name;
        this.express = require('express');
        this.router = this.express.Router();
    }
}

module.exports = AppController;