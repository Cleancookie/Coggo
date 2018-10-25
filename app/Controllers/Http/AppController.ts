import * as express from 'express';

export class AppController {

    public name: string;
    public router: express.Router;

    /**
     * Base HTTP controller
     * 
     * @param String controllerName 
     */
    constructor(name = 'App') {
        this.name = name;
        this.router = express.Router();
    }
}