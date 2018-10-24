'use strict';
const express = require('express');
const router = express.Router();

// Make controllers
const HomeController = require('../Controllers/Http/HomeController');
const homeController = new HomeController();

router.get('/', (req, res) => homeController.homepage(req, res));

module.exports = router;