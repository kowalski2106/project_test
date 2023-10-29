// Function declaraion
//сперва можно вызывать а потом объяваить
function greet (name) {
    console.log('Hello - ', name);
}

greet('igor');

//Functuin Expression
//всегда вызываем после объявления 
const greet2 = function(name) {
    console.log('2 Hello - ', name);
}

greet2('igor');

console.log(typeof greet);

setTimeout(function() {
    greet('igorek');
}, 1500);



let counter = 0;
const interval = setInterval(function() {
    
    if (counter === 5) {
        clearInterval(interval);
    } else {
        ++counter;
        console.log(Math.random());
    }
}, 2000);

//arrow functions

const greet3 = (name) => {
    console.log('3 Hello - ', name);
}
greet3('Boom');

const greet4 = name => console.log('4 Hello - ', name);
greet4('babah');

function pow(num, exp) {
    return Math.pow(num, exp);
}
console.log(pow(2, 3));

const pow2 = (num, exp) => Math.pow(num, exp);
console.log(pow2(3, 3));

//default parameters

const sum = (a = 10, b = a / 5) => a + b;
console.log(sum());

function sumAll(...numbers) { //... - оператор rest
    let res = 0;
    for (let num of numbers) {
        res += num;
    }
    return res;
}

console.log(sumAll(1, 2, 3, 4, 5));

function sumAllReduce (...numbers) {
    return numbers.reduce((acc, n) => acc += n, 0);
}
console.log(sumAllReduce(1,2,3,4,5,5));

//замыкания

function createPerson(name) {
    return function(lastname) {
        console.log(name + ' ' + lastname);
    }
}

const addLastName = createPerson('Igorek');
addLastName('Babah');

 