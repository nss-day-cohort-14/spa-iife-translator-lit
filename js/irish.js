var translator = (function(originalWord){


	var irishtrans;
	var irishWords = {
			"Merry Christmas": "Cristman Merry",
			"Happy New Year": "Bhliain nua sásta",
			"Say hello to my little friend": "rá hello mo chara beag",
			"Bring me a beer": "Tabhair dom beoir",


			}

	originalWord.getTranslate = function(word){
		irishtrans = irishWords[word];
		console.log("test", irishtrans);
		return irishtrans;
	}

	return originalWord;



})(translator);

