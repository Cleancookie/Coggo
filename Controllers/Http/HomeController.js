"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppController_1 = require("./AppController");
class HomeController extends AppController_1.AppController {
    constructor() {
        super('Home');
        this.motd = 'Test MOTD';
    }
    getMotd() {
        return this.motd;
    }
    homepage(req, res) {
        res.render('Home/index', {
            socketNamespace: 'Test'
        });
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map