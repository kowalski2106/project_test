/*
const now = new Date();

const start = new Date(1000 * 60 * 60 * 24 * 365);
console.log(start);

const date = new Date(2011, 0, 4, 12, 42, 12);

console.log(now.getFullYear());
console.log(now.getMonth()); //январь 0-вой месяц
console.log(now.getDate());
console.log(now.getHours());

//now.setFullYear(2055);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
*/
const output = document.getElementById('output');
const fullDate = document.getElementById('full');
const date  = document.getElementById('date');
const time = document.getElementById('time');
//const now = new Date();
let mode = 'time';

function bindMode(name) {
    return function() {
        mode = name;
        update();
    }
}

function update() {
    output.textContent = format(mode);
}

update();

setInterval(() => {  
    update();
}, 1000)

fullDate.addEventListener('click', bindMode('full'));

date.addEventListener('click', bindMode('date'));

time.addEventListener('click', bindMode('time'));


//Pure Function
function format(formatMode) {
    const now = new Date();
    switch (formatMode) {
        case 'time': 
            return now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
    }
}







