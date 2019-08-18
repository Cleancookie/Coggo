class HomeController {
	async homepage(ctx) {
		await ctx.render("index", { message: "Yerd" });
		return;
	}
}

exports = module.exports = new HomeController();
