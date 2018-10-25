"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppWs_1 = require("./AppWs");
class TestWs extends AppWs_1.AppWs {
    constructor(io) {
        super(io, 'Test');
    }
    startListeners() {
        this.io.on('connection', (socket) => {
            console.log('User has connected to ' + this.name);
        });
    }
}
module.exports = TestWs;
//# sourceMappingURL=TestWs.js.map