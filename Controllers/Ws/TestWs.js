'use strict';

const AppWs = require('./AppWs');

class TestWs extends AppWs {
    constructor(io) {
        super('Test', io);
    }

    startListeners() {
        this.io.on('connection', (socket) => {
            console.log('User has connected to ' + this.name);
        });
    }
}

module.exports = TestWs;