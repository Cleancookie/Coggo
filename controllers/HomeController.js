class HomeController {
	async homepage(req, res) {
		res.render("index", { message: "Yerd" });
		return;
	}
}

exports = module.exports = new HomeController();
