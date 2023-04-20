let currentResult = '';

function getResult(value) {
	currentResult += value;
	document.getElementById('result').value = currentResult;
}

function clearResult() {
	currentResult = '';
	document.getElementById('result').value = currentResult;
}

function calculateResult() {
	try {
		const result = eval(currentResult);
		if (isNaN(result)) {
			throw 'Invalid input';
		}
		document.getElementById('result').value = result;
		currentResult = result.toString();
	} catch (error) {
		document.getElementById('result').value = error;
		currentResult = '';
	}
}
