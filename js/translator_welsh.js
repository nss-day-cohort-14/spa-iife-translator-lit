var translator = (function(trans) {

	var translation;
	var welshLexicon = {
		"say": "dweud",
		"hello": "helo",
		"to": "i",
		"my": "fy",
		"little": "ychdig",
		"friend": "ffrind"

	};

	trans.getTranslation = function(input) {
		translation = input;
		translator.translate();
		return translation;
	};
	trans.translate = function() {
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