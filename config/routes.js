var PagesController = require('../app/controllers/PagesController');

module.exports = function (app) {
    app.get('/', PagesController.home); // Homepage
    app.get('/test', PagesController.testPage); // testPage

    //catch 404 and forward to error handler
	app.use(function (req, res, next) {
	    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
	});

	app.use(function (req, res, next) {
	    res.status(500).render('404', {title: "Sorry, page not found"});
	});
}

