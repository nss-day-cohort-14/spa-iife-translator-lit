var translator = (function(originalWord){

	var irishtrans;
	// need to make all words lower case and seperate out hello to
	// if there is no translation for to make it a blank value.
	var irishWords = {
			"say": "rá",
			"hello": "hello",
			"my": "mo",
			"little": "beag",
			"friend": "chara"
			};

	originalWord.getIrishTranslation = function(word){
		irishtrans = word;
		translator.translateToIrish();
		return irishtrans;
	};
	originalWord.translateToIrish = function() {
		var words = [];
		irishtrans = irishtrans.split(' ');
		for (let i = 0; i < irishtrans.length; i++) {
			for (var key in irishWords) {
			if (irishtrans[i] === key) words.push(irishWords[key]);
			}
		}
		irishtrans = words.join(' ');
	};

	return originalWord;

})(translator);