var elButton = document.getElementById('button'),
	elDisplay = document.getElementById('display'),
	elLanguage = document.getElementById('language'),
	elInput = document.getElementById('input');

elButton.addEventListener('click', translate);

function translate() {
	var language = elLanguage.value;
	console.log(language);
	if (isValid() === true) {
		translator.setInput(elInput.value);
		elDisplay.innerHTML = translator.getWelshTranslation(translator.getInput());
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