let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    let expression = display.value;
    let result;

    result = eval(expression);
    display.value = result;
    history.push(expression + ' = ' + result);
}
function clearDisplay() {
    display.value = '';
}
function showHistory() {
    historyList.innerHTML = '';

    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
