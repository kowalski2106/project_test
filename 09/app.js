/*
const car = {
    model: 'Tesla',
    year: 2003,
}

const json = JSON.stringify(car); //из объекта в json
const parsed = JSON.parse(json);
console.log(json);
console.log(parsed);
*/

const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let USERS = [];

filter.addEventListener('input', (event) =>{
    console.log('input:', event.target.value);
    //console.log(event.target);
    //const {value} = event.target; //деструкторизация
    const value = event.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value);
    });
    render(filteredUsers);

})

async function start() {
    list.innerHTML = 'Loading...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        }); //асинхронный запрос на сервер и получить по url данные
        console.log(response);
        const data = await response.json(); //привете ответ от сервера к формату json
        console.log(data);
        setTimeout(() => {
            USERS = data;
            render(data);
        },2000);
        
    } catch (err) {
        list.innerHTML = err.message;
    }
}



function render(users = []) {
    if (users.length === 0) {
        list.innerHTML = 'No matched users!'
    } else {
        const html = users.map(toHTML).join('');
        console.log(html)
        list.innerHTML = html;
    }
}
    

function toHTML(user) {
    return `<li>${user.name}</li>`
}

start();