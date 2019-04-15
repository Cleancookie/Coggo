class HomeController {
	async homepage(req, res) {
		res.json({
			msg: `Homepage function from HomeController`,
		});
		return;
	}
}

exports = module.exports = new HomeController();
