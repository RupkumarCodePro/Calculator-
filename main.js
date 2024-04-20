

function appendToDisplay(value) {

document.getElementById('di

splay').value+= value;

}

function clearDisplay() {

document.getElementById('di splay').value='';

function calculate() { const expression = document.getElementById('di

splay').value; const result = eval(expression);

document.getElementById('di splay').value = result:

}

