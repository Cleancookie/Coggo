import * as Express from 'express';

export class AppController {

    public name: string;
    public router: Express.Router;

    /**
     * Base HTTP controller
     * 
     * @param String controllerName 
     */
    constructor(name = 'App') {
        this.name = name;
        this.router = Express.Router();
    }
}