var translator = (function(linter) {

	linter.lint = function(input) {
		console.log(input);
		var lintedInput = input.replace(/[.?!@#$%^&*():;{}\[\]/\\=+<>'"-]/g,'')
								.replace(/[0-9]/g,'')
								.toLowerCase();
		console.log(lintedInput);
		return lintedInput;
	};

	return linter;

})(translator);