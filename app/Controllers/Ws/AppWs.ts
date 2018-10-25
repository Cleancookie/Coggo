import * as socketIo from 'socket.io';
import { SocketOptions } from 'dgram';

export class AppWs {

    public name: string;
    public io: socketIo.Namespace;
    public socketNamespace: string;

    constructor(io: socketIo.Server, name = 'App', socketNamespace = 'App') {
        this.name = name;

        this.socketNamespace = (socketNamespace.length != 0) ? socketNamespace : name;
        this.io = io.of(this.socketNamespace);
        this.startListeners();
    }

    startListeners() {

    }
}