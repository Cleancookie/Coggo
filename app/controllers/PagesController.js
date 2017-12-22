var bcrypt = require('bcrypt-nodejs');

exports.home = function(req, res) {
	res.render('index', {
		title: 'Cookie Template',
	});
}