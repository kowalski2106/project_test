const person = {
    name: 'Igor',
    age: 26,
    isYoutuber: false,
    languages: ['ru', 'en'],
    address: {
        city: 'Krasnoad',
        street: 'Krasnaya',
    },
    'complex key': 'complex',
    [1 + 2]: 'computed value', //[] нужны для вычисления ключа
    greet() {
        console.log('Green from person', this);
    },
    arrow: () => {
        console.log('Person Arrow', this); //не создает собстсенный контекст
    },
    info() {
        console.log(this.name);
    }
}

console.log(person);
person.greet();
person.arrow();
person.info();
console.log(person.address);
console.log(person['complex key']);

person.age++;
person.languages.push('de');
console.log(person.languages);

//person.address = undefined;
delete person.address;

console.log(person);


//Деструктаризация
const name = 'Petr';
const {age, name: firstName = 'TEST', languages} = person
console.log(languages, age, firstName);

for (let key in person){
    //console.log(key);
    if (person.hasOwnProperty(key)) { //используем чтоб не проходиться по ключам прототипа объекта (скнижаем риск ошибки)
        console.log(person[key]);
    }
}

const keys = Object.keys(person);
console.log(keys); //массив ключей
keys.forEach((key) => {
    console.log(person[key]);
})

const logger = {
    keys() {
        console.log('Objects keys', Object.keys(this));
    },

    keysAndValuse() {
        Object.keys(this).forEach((key) => {
            console.log('Key: ', key);
            console.log('Value: ', this[key]);
        })
    }
}

const bound = logger.keys.bind(person);
bound();

logger.keys.call(person); //можем передаваит различные параметры сколько угодно
logger.keys.apply(person); //всего 2 параметра и второй всегда массив