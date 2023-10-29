/*коллекции элементов

const array = [1, 2, 3];
const arrayStr = ['a', 'b'];

const array1 = new Array(1, 2, 3, 'a');
console.log(array);
console.log(array1.length);
console.log(array1[3]); 
console.log(array[array.length - 1]);
array[0] = 'hi';
console.log(array);
array[array.length] = 'apple'; 1
console.log(array);
*/

/*
object отдельный тип данных
const person = {
    firstName: 'I',
    lastName: 'B',
    age: 26,
    languages: ['ru', 'en', 'de'],
    getFullName: function() {
        return `${person.firstName} ${person.lastName}`;
    }

};
console.log(person.languages);
console.log(person['age']);
const key = 'firstName';
console.log(person[key]);
person.age = 266;
console.log(person.age);
console.log(person.getFullName());
*/

const inputNote = document.getElementById('noteName');
const createBtn = document.getElementById('add');
const listElement = document.getElementById('list');

//const notes = ['раз', 'два', 'три'];
// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//     // }
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//     }
// }

//вывести значения из массива при загрузке страницы
//render();

const notes = [
    {
        title: 'раз',
        completed: false,
    },
    {
        title: 'два',
        completed: true,
    },
    {
        title: 'три',
        completed: false,
    },
];

createBtn.addEventListener('click', () => {
    if (inputNote.value != '') {
        const newNote = {
            title: inputNote.value,
            completed: false
        }
        //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote));
        notes.push(newNote);
        render(); //плохо что всегда при добавлении записи будем проходиться по каждому элементу массива начиная с 0
    }
    inputNote.value = '';

})

listElement.addEventListener('click', (event) => {
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed;
            console.log('toggle', index);
        } else if (type === 'remove') {
            notes.splice(index, 1);
            console.log('remove', index);
        }

        render();
    }

    
})

function getNoteTemplate(note, index) {
    return `
    <li>
        <span style="${note.completed ? 'text-decoration: line-through' : 'color:red'}">${note.title}</span>
        <button id="addNote" data-index="${index}" data-type="toggle">&check;</button>
        <button id="deleteNote" data-index="${index}" data-type="remove">&times;</button>
    </li>
    `
}


function render() {
    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    // }
    listElement.innerHTML = '';
    if (notes.length == 0) {
        listElement.innerHTML = '<p>Нет записей</p>';
    }
    for (let i = 0; i < notes.length; i++) {
         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
    }
}

render();