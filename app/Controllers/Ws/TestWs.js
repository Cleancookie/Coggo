'use strict';

import AppWs from 'AppWs';

class TestWs extends AppWs {
    /**
     * 
     * @param SocketIO.server io Ws server instance
     */
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