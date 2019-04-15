const express = require("express");
const router = express.Router();
const serverConfig = require("../server.config");

const HomeController = require("../controllers/HomeController");

if (serverConfig.env == "dev") {
	router.get("/debug", (req, res) => {
		return res.json({
			body: req.body,
			params: req.params,
		});
	});
}

router.get("/", HomeController.homepage);

exports = module.exports = router;
