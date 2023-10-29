//Event Loop

// const timeout = setTimeout(() => {
//     console.log('after 2 seconds')
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//     console.log('after 3 seconds')
// }, 3000);

// let count = 0;
// setInterval(() => {
//     console.log('tick', ++count)
// }, 1000);

function delay(callback, time = 1000) {
    setTimeout(callback, time);
}

delay(() => {
    console.log('timeout');
})
// Promise
const promiseDelay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]);
            //reject('Error in delay');
        }, time)
    });
    return promise;
}

promiseDelay(2500).then((data) => {
    console.log('eba', data);
    return data.map(x => x ** 2);
})
.then(data => {
    console.log(data);
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'));




const getData = () => new Promise((resolve) =>
resolve([1,2,3]));

//более нативный способ для работы с промисами
async function asyncExample() {
    try {
        await promiseDelay(3000);
        const data = await getData();
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Finally!!!')
    }
}

asyncExample();


//getData().then(array => console.log(array));