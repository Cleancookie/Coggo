'use strict';

export class AppWs {

    /**
     * Base WebSocket controller
     * 
     * @param String name Name of controller
     * @param IO io SocketIO instance
     */
    constructor(io, name = 'App', socketNamespace = 'App') {
        this.name = name;

        this.socketNamespace = (socketNamespace.length != 0) ? socketNamespace : name;
        this.io = io.of(this.socketNamespace);
        this.startListeners();
    }

    startListeners() {

    }
}