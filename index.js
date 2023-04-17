// Create an array of all the numbers
let numbersArray = document.getElementsByClassName('number');

// select the display area
let display = document.getElementById('output')

// Add an event listener to all the numbers that displays them in the display area
for (let item of numbersArray) {
    item.addEventListener('click', () => {
        display.innerText += item.innerText;
    })
}

// Add an event listener to the clear button that clears the display area
document.getElementById('clear').addEventListener('click', () => {
    display.innerText = '';
})

// Select all the operators
let operators = document.getElementsByClassName('operator');

// Initialize variables to store data
let firstNum = '';
let secondNum = '';
let operation = '';

// attach event listeners to the operators
for (let operator of operators) {
    operator.addEventListener('click', (event) => {
        firstNum = parseInt(display.innerText);
        display.innerText = '';
        operation = event.target.innerText;
        
    })
}

// Attach event listener to calculate button
document.getElementById('calculate').addEventListener('click', () => {
    secondNum = parseInt(display.innerText);
    let answer = ''

    switch (operation) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer += firstNum - secondNum;
            break;
        case 'x':
            answer += firstNum * secondNum;
            break;
        case '/':
            answer += firstNum / secondNum;
            break;
    }

    display.innerText = answer;

})