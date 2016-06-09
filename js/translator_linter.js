var translator = (function(linter) {

	linter.lint = function(input) {
		console.log('will lint this: ' + input);
		return input;
	};
	linter.removePunctuation = function(string) {

	};

	return linter;

})(translator);