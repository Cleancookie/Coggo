import * as express from 'express';
import { HomeController } from '../Controllers/Http/HomeController';

export class BoneRouter {

    protected static _instance: BoneRouter;
    protected router: express.Router;

    protected constructor() {
        // I am a Singleton, and ready to mingle
        this.router = express.Router();
        this.initRoutes();
    }

    protected initRoutes(): void {
        // Add routes here
        let homeController = new HomeController();
        
        this.router.get('/', (req, res) => homeController.homepage(req, res));
    }

    public static get Instance(): BoneRouter {
        return (this._instance || (this._instance = new this()));
    }

    public get Routes(): express.Router {
        return this.router;
    }
}