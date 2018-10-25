import { AppWs } from './AppWs';
import * as socketIo from 'socket.io';

class TestWs extends AppWs {

    constructor(io) {
        super(io, 'Test');
    }

    startListeners() {
        this.io.on('connection', (socket: socketIo.Socket) => {
            console.log('User has connected to ' + this.name);
        });
    }
}

module.exports = TestWs;