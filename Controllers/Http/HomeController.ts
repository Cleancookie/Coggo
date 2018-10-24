import { AppController } from './AppController';
import { Request, Response } from 'express';

export class HomeController extends AppController {

    public motd: string;

    constructor() {
        super('Home')
        this.motd = 'Test MOTD';
    }

    getMotd() {
        return this.motd;
    }

    homepage(req: Request, res: Response) {
        res.render('Home/index', {
            socketNamespace: 'Test'
        });
    }
}