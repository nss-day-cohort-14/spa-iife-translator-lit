var translator = (function(trans) {

	var translation;
	var welshLexicon = {
		"say": "dweud",
		"hello": "helo",
		"to": "i",
		"my": "fy",
		"little": "ychydig",
		"friend": "ffrind",
		"me": "mi",
		"i": "yr",
		"want": "eisiau",
		"what's": "beth sy'n",
		"coming": "dod",
		"the": "y",
		"world": "byd",
		"and": "ac",
		"everything": "popeth",
		"in": "yn",
		"it": "mae'n",
		"chico": "bechgen"
	};

	trans.getWelshTranslation = function(input) {
		translation = translator.lint(input);
		translator.translateToWelsh();
		return translation;
	};
	trans.translateToWelsh = function() {
		var tempArray = [];
		translation = translation.split(' ');
		for (let x = 0; x < translation.length; x++) {
			for (var key in welshLexicon) {
			if (translation[x] === key) tempArray.push(welshLexicon[key]);
			}
		}
		translation = tempArray.join(' ');
	};

	return trans;

})(translator);