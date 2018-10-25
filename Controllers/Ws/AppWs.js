"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppWs {
    constructor(io, name = 'App', socketNamespace = 'App') {
        this.name = name;
        this.socketNamespace = (socketNamespace.length != 0) ? socketNamespace : name;
        this.io = io.of(this.socketNamespace);
        this.startListeners();
    }
    startListeners() {
    }
}
exports.AppWs = AppWs;
//# sourceMappingURL=AppWs.js.map