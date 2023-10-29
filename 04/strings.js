const myName = 'Igor';
const age = 26;

function getAge() {
    return age;
}

const output = `any string ${getAge()}`;
console.log(output);

console.log(myName.length);
console.log(myName.charAt(2)); //o
console.log(myName.indexOf('r')); //3
console.log(myName.startsWith('ig')); //false
console.log(myName.endsWith('or'));
console.log(myName.repeat(2));

const password = '    my pass   ';
console.log(password.trim()); //убирет пробелы

