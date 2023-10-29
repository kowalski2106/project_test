const names = ['Игорь', 'Влад', 'Настя', 'Оля'];

//names.push('Алена');
//names.unshift('Алена'); //запишет в начало

/*
let firstElem = names.shift(); //извелкает первый элемент
console.log(firstElem);
let lastElem = names.pop(); //извлекает поседний элемент
console.log(lastElem);
console.log(names);
*/

console.log(names.reverse()); //мутирует исходных массив
//const reversed = names.toReversed(); //новый метод массива пока не работает в VS, не меняет исходный 
const letters = ['e', 'c', 'd', 'a', 'f'];
console.log(letters.sort((a, b) => {   //мутирует массив
    return a.charCodeAt(0) - b.charCodeAt(0);
}));

//console.log(letters.toSorted()); //пока не работает в VS, не мутирует массив

const names1 = ['Игорь', 'Влад', 'Настя', 'Оля'];
//console.log(names1.splice(1, 1)); //мутирует исходный массив
console.log(names1.toSpliced(0, 2)); //пока не работает в VS не мутриует
console.log(names1);

const names2 = ['Игорь', 'Влад', 'Настя', 'Оля'];
const greatMan = 'Игорь';
const someIndex = names2.indexOf(greatMan); //если нет элемента вернет -1
console.log(someIndex);
console.log(names2[someIndex]);
names2[someIndex] = 'Мой господин Игорь';
console.log(names2);
//names2.with(1, 'Влад лох'); в VS не работает, не мутриует массив, возращает новый массив
console.log(names2);


const names3 = ['Игорь', 'Влад', 'Настя', 'Оля'];
const capitalNames = names3.map(function(el) { //всегда возвращаент измененный массив
    return el.toUpperCase();
});
console.log(names3);
console.log(capitalNames);


const names4 = ['Игорь', 'Влад', 'Настя', 'Оля'];
names4.map(function(el) {
    console.log(el.toUpperCase());
});

const names5 = ['Игорь', 'Влад', 'Настя', 'Оля'];
const newMapArr = names5.map((el, index)=>{
    if (index == 1) {
        return 'loh';
    }
    return el;
})
console.log(newMapArr);

console.log(newMapArr.includes('loh')); //есть ли элемент в массиве
console.log(newMapArr.indexOf('loh') !== -1);

const namesObj = [
    {name: 'Игорь',budjet: 4200},
    {name: 'Влад', budjet: 300},
    {name: 'Натся', budjet: 4000},
    {name: 'Оля', budjet: 5000}
];

const findedPerson = namesObj.find(function(person) {
    return person.budjet === 300;
    //if (person.budjet === 300) return true
});
console.log(findedPerson);

const finded = namesObj.find(p => p.budjet === 5000);
console.log(finded);

const findedIndex = namesObj.findIndex(function(person) {
    return person.budjet === 300;
    //if (person.budjet === 300) return true
});
console.log(findedIndex);
console.log(namesObj[findedIndex]);

// let findedPerson;
// for (let person of namesObj) {
//     if (person.budjet === 4000) {
//         findedPerson = person;
//     }
// }
// console.log(findedPerson);

const namesObj1 = [
    {name: 'Игорь',budjet: 4200},
    {name: 'Влад', budjet: 300},
    {name: 'Натся', budjet: 4000},
    {name: 'Оля', budjet: 5000}
];

let sumBudget = 0;
const filtered = namesObj1.filter(p => p.budjet > 4000);
console.log(filtered);

filtered.forEach((p) => {
    sumBudget += p.budjet;
})

console.log(sumBudget);


//то же самое только с reduce
const byBudjet = p => p.budjet > 4000;
const pickBujet = p => p.budjet;
let reduceSumBudget = namesObj1
    .filter(byBudjet)
    .map(pickBujet)
    .reduce((acc, p) => {
        return acc + p;
    }, 0)
console.log(reduceSumBudget);



const str = 'Привет, как дела?';
const reversedStr = str.split('').toReversed().join('!').split('').filter(s => s !== '!').join('');
console.log(reversedStr);



