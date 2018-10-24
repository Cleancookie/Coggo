'use strict';

const AppController = require ('./AppController');

class HomeController extends AppController {
    constructor() {
        super('Home')
        this.motd = 'Test MOTD';
    }

    getMotd() {
        return this.motd;
    }

    homepage(req, res) {
        res.render('Home/index', {
            socketNamespace = 'Test'
        });
    }
}

module.exports = HomeController;