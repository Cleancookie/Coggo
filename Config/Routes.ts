import * as Express from 'express';
import { HomeController } from '../Controllers/Http/HomeController';

let router = Express.Router();

// Make controllers
let homeController = new HomeController();

router.get('/', (req, res) => homeController.homepage(req, res));

module.exports = router;