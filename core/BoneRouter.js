const KoaRouter = require("koa-router");
const router = new KoaRouter();

const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.homepage);

exports = module.exports = router;
