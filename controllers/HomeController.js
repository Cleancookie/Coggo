class HomeController {
  /**
   * Renders the homepage
   *
   * @param {import('koa').Context} ctx
   */
  static async homepage(ctx) {
    await ctx.render('index', { message: 'Yerd' });
  }
}

module.exports = HomeController;
