const num = 42; //int
const float = 4.3; // float
const pow = 10e3; //10000
const big = 1_000_000; //1000000

console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.isFinite(1/0));

const weird = 23 / undefined;
console.log(Number.isNaN(weird));

const strInt = '42';
const strFloat = '42.42';
//console.log(Number(strInt));
//console.log(Number(strFloat));
//console.log(parseInt(strInt));
//console.log(parseFloat(strFloat));
console.log(+strInt, +strFloat);


console.log(+(0.1 + 0.2).toFixed(1));

// BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 3213123n);

//Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.abs(-42));
console.log(Math.max(2, 100, 33, 31));
console.log(Math.min(2, 100, 33, 31));

console.log(Math.floor(4.9)); //в меньшую
console.log(Math.ceil(4.1)); //в большую
console.log(Math.round(4.2));
console.log(Math.trunc(3.3));

console.log(Math.random());

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const num1 = getRandomNumber(1, 5);
console.log(num1);



