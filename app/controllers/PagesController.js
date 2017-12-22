var bcrypt = require('bcrypt-nodejs');

exports.home = function(req, res) {
	res.render('index', {
		title: 'Welcome',
	});
}

exports.testPage = function(req, res) {
	res.render('index');
}