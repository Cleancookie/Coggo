"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("body-parser");
const morgan = require("morgan");
const socketIO = require("socket.io");
const Routes_1 = require("../Config/Routes");
class BoneApp {
    constructor() {
        this.app = express();
        this.port = 13337;
        this.viewFolder = path.join(__dirname, '../Views');
        this.initView();
        this.initMiddleware();
        this.initRoutes();
    }
    initView() {
        this.app.use(express.static(this.viewFolder + '/Public'));
        this.app.set('views', this.viewFolder);
        this.app.set('view engine', 'ejs');
    }
    initMiddleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser());
    }
    initRoutes() {
        this.app.use('/', Routes_1.BoneRouter.Instance.Routes);
    }
    letsaGo() {
        this.io = socketIO(this.app.listen(this.port));
        console.log('Set sail from port ' + this.port);
    }
}
exports.BoneApp = BoneApp;
//# sourceMappingURL=BoneApp.js.map