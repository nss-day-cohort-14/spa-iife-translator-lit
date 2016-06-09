var elButton = document.getElementById('button'),
	elDisplay = document.getElementById('display'),
	elLanguage = document.getElementById('language'),
	elInput = document.getElementById('input');

elButton.addEventListener('click', translate);

function translate() {
	var language = `get${elLanguage.value}Translation`;
	console.log(language);
	if (isValid() === true) {
		translator.setInput(elInput.value);
		// elDisplay.innerHTML = translator.getIrishTranslation(translator.getInput());
		elDisplay.innerHTML = `<p>${translator[language](translator.getInput())}</p>`;
		var speech = translator[language](translator.getInput());
		var msg = new SpeechSynthesisUtterance(speech);
		window.speechSynthesis.speak(msg);
	}
}

function isValid() {
	var alertString = ''
	if (elInput.value.length > 1) {
		return true;
	} else {
		alertString = "There is no text in text area.\n"
		elInput.focus();
		alert(alertString);
		return false;
	}
}


