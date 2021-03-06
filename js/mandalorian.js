var translator = (function(originalTranslator) {

	var translation;
	var lexicon = {
		"say": "sirbur", 
		"hello": "Su cuy'gar",
		"to": "at",
		"my": "ner",
		"little": "ad'ika",
		"friend": "burc'ya",
	};

	// create a function that the Dom Handler can call with input
	originalTranslator.getMandalorianTranslation = function (input){
		// separate input into serchable text	
		var temp = [];
		translation = translator.lint(input);
		translation = translation.split(' ');
		for ( i = 0; i < translation.length; i++) {
			for (var key in lexicon) {
				if (translation[i] === key){
					temp.push(lexicon[key]);
				}
			}
		}
		return temp.join(" ");
	};

	return originalTranslator;

})(translator);




