var translator = (function(originalWord){

	var irishtrans;
	var irishWords = {
			"Say": "rá",
			"hello to": "hello",
			"my": "mo",
			"little": "chara",
			"friend": "beag"
			};

	originalWord.getIrishTranslation = function(word){
		irishtrans = word;
		translator.translate();
		return irishtrans;
	};
	originalWord.translateToIrish = function() {
		var words = [];
		irishtrans = irishtrans.split(' ');
		for (let i = 0; i < irishtrans.length; i++) {
			for (var key in irishWords) {
			if (irishWords[i] === key) words.push(irishWords[key]);
			}
		}
		irishtrans = words.join(' ');
	}

	return originalWord;

})(translator);