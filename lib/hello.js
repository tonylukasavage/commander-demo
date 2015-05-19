module.exports = function(args, opts) {
	args = args.length ? args : ['john doe'];
	var text = opts.salutation + ' ' + args.join(', ') + '!';
	if (opts.uppercase) { text = text.toUpperCase(); }
	console.log(text);
}