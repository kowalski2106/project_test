class Human {
    static isHuman = true; //не проицируется на экземляры классов (полсе относится к самому классу, а не к его экземлярам)

    humanGreet() {
        console.log('greet from human');
    }
}

class Person extends Human {
    constructor(name, age) {
        super(); //фу-ция которая вызывает родительский конструктор
        this.name = name ?? 'Undefined name';
        this.age = age ?? 'Undefined age';
    }

    sayHello() {
        console.log('hello from', this.name);
    }
}

const newPerson = new Person('igor');
const newPerson2 = new Person('Hren', 18);
newPerson.sayHello();
newPerson2.sayHello();
console.log(newPerson);
newPerson.humanGreet();
console.log(newPerson.isHuman); //undefined
console.log(Person.isHuman);
