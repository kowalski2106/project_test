
// let num = 20;
// let firstName = 'Igorek';
// const isProgrammer = true;
// num = 10;

// console.log('Number is:', num); 
// console.log(num + 5);

// let num2 = num + 10;
// console.log(num2); 

// const fullName = firstName + ' Bilenko';
// console.log(fullName);

const firstNum = document.getElementById('firstNumber');
const secondNum = document.getElementById('secondNumber');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

/*
//My methow to solve this problem
let plusResult, minusResult;
plusBtn.addEventListener('click', () => {
    plusResult = Number(firstNum.value) + Number(secondNum.value);
    
})
minusBtn.addEventListener('click', () => {
    minusResult = Number(firstNum.value) - Number(secondNum.value);   
})
calculateBtn.addEventListener('click', () => {
    if (plusResult != null) {
        result.value = plusResult;
        result.style.color = 'green';
        plusResult = null;
    }
    if (minusResult != null) {
        result.value = minusResult;
        result.style.color = 'red';
        minusResult = null;     
    }
})
*/

let action = '+';
plusBtn.addEventListener('click', () => {
    action = '+';
});
minusBtn.addEventListener('click', () => {
    action = '-';
});
function printResult(localResult) {
    localResult <= 0 ? result.style.color = 'red' : result.style.color = 'green';
    result.value = localResult;
}

function calculateNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    
    return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

calculateBtn.addEventListener('click', () => {
    const res = calculateNumbersWithAction(firstNum, secondNum, action);
    printResult(res);
});



