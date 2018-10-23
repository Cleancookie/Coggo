'use strict'

class AppWs {

    /**
     * Base WebSocket controller
     * 
     * @param String name Name of controller
     * @param IO io SocketIO instance
     */
    constructor(name = 'App', io) {
        this.name = 'App';
        this.io = io;

        this.startListeners();
    }

    startListeners() {

    }
}

module.exports = AppWs;