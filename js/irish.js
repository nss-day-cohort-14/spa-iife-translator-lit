var translator = (function(originalWord){

	var irishtrans;
	// need to make all words lower case and seperate out hello to
	// if there is no translation for to make it a blank value.
	var irishWords = {
			"say": "rá",
			"hello": "dia dhuit",
			"to": "chun",
			"my": "mo",
			"little": "beag",
			"friend": "chara"
			};

	originalWord.getIrishTranslation = function(word){
		irishtrans = translator.lint(word);
		console.log('irishtrans', irishtrans)
		translator.translateToIrish();
		return irishtrans;
	};
	originalWord.translateToIrish = function() {
		var words = [];
		irishtrans = irishtrans.split(' ');
		for (let i = 0; i < irishtrans.length; i++) {
			for (var key in irishWords) {
			// there's a problem with the line below
			if (irishtrans[i] === key) words.push(irishWords[key]);
			}
		}
		irishtrans = words.join(' ');
	};

	return originalWord;

})(translator);