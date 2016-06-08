var translator = (function() {

	var input;

	return {
		getInput: function() {
			return input;
		},
		setInput: function(arg) {
			input = arg;
		}
	}

})();