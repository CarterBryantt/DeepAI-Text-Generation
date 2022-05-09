deepai.setApiKey('3c7c00e6-36e9-41e6-881a-57e08795c687');

let generateButton = document.getElementById('generate-text');
let inputText = document.getElementById('input-text');
let output = document.getElementById('output');
let saveButton = document.getElementById('save-text');
let resultText = "";

generateButton.onclick = () => query(inputText.value);

saveButton.onclick = save;

async function query(text) {
	let response = await deepai.callStandardApi("text-generator", {
		text: text,
	});
	resultText = response.output;
	output.textContent = response.output;
}

async function save() {
	try {
		await navigator.share({
			title: 'Generated Text',
			text: resultText
		});
	} catch(err) {
		console.log(err);
	}
}