function getInputFieldValueById(id) {
const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);

return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textValue);

    return textnumber;
}

function setTextFieldValueById(id, newValue){
    document.getElementById(id).innerText = newValue + 'BDT'
}

function showSectionById(id){
    document.getElementById('compaigns').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

 