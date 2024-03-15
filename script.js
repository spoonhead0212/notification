const naming = document.querySelectorAll('.name')
const proImgs = document.querySelectorAll('.profile-img')
const newNotes = document.querySelectorAll('.new-notification')
const dot = document.querySelectorAll('.dot')
const unread = document.querySelector('.unread')

async function fakeApi() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (response.ok) {
            const data = await response.json()
            const moreDatas = data.results;
            naming.forEach((namer, index) => {
                const dataFirstName = moreDatas[index].name.first
                const dataLastName = moreDatas[index].name.last
                namer.textContent = `${dataFirstName} ${dataLastName}`;
            })
            // img
            proImgs.forEach((proImg, index) => {
                const dataImage = moreDatas[index].picture.medium
                proImg.src = dataImage;
            })
        } else {
            throw new Error('There was an error trying to fetch data from APi')
        }
    } catch (error) {
        console.log(error);
    }
}
fakeApi()

// const unreadNumber = newNotes.length;
// unread.textContent = unreadNumber
// const minus = function(arg) {
//     arg--
//     unread.textContent = arg;
// }


const decrease = (arg) => {
    arg.length--
    console.log(arg.length);
    console.log('again');
}

const message = document.querySelector('.msg')
newNotes.forEach((newNote, ind) => {
    newNote.addEventListener('click', function(){
        if (ind === 3) {
            message.classList.toggle('show-msg');
        }
        minus(state)
        newNote.style.backgroundColor = 'unset'
        dot[ind].remove()
    })
})

const state = {
    unreadNumber: newNotes.length
};

unread.textContent = state.unreadNumber;

const minus = function(obj) {
    obj.unreadNumber--;
    unread.textContent = obj.unreadNumber;
};

document.querySelector('.mark').addEventListener('click', function() {
    unread.textContent = '0'
    newNotes.forEach(element => {
        element.style.backgroundColor = 'unset'
    });
    dot.forEach(element => {
        element.remove()
    });
})

// setInterval(() => minus(state), 1000);

// setInterval(() => decrease(newNotes), 2000);
// console.log(newNotes);

// const stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
// }

// async function getTodos() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     console.log(data);
// }
// getTodos()

// async function fetchData() {
//     try {
//         const responseOne = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         if (!responseOne.ok) {
//             throw new Error('There was an error trying to fetch data from APi')
//         }
//         const dataOne = await responseOne.json()
//         console.log(dataOne);
//     } catch(error) {
//         console.log(error);
//     }   
// }
// fetchData()

// REGULAR WAY TO FETCH AN API
// fetch('https://www.boredapi.com/api/')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));

// async function runProcess () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const json = await response.json()
//     console.log(json);
// }
// runProcess()

// const prom = new Promise((resolve, reject) => {
//     if (resolve) {
//         resolve('We RESOLVED it baby');
//     } else {
//         reject('FUck, we got REJECTED');
//     }
// })

// prom
// .then((data => console.log(data)))
// .catch((err => console.log(err)))


// let is_shop_open = true;

// let order = () => {
//     return new Promise ((resolve, reject) => {
//         if (true) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order() {
//     try{
//         await abc
//     }
//     catch(error){console.log('Abc doesnt exist')}
//     finally{
//         console.log('Run code anyways!!!!!!');
//     }
// }

// order()

// let is_shop_open = false;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(()=>{
//                 resolve(work())
//             }, time)
//         } else {
//             reject(console.log('Shop is closed'))
//         }
//     })
// }

// const choice = ()=> {
//     console.log(`${stocks.Fruits[0]} was selected`);
// }
// order(2000, choice)
// .then(()=> {
//     return order(0000, ()=>{console.log('Production has started')})
// })
// .then(()=> {
//     return order(2000, ()=>{console.log('The fruit was chopped')})
// })
// .catch(() => {console.log('The customer left')})
// .finally(()=>{console.log('The shop is closed');})


// let order = (fruit_name, call_production) => {
//     setTimeout(()=> {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//         call_production()
//     }, 2000)
// }

// let production = () => {
//     setTimeout(()=> {
//         console.log('Production has started');

//         setTimeout(() => {
//             console.log('The fruit has been chopped');
//         }, 2000);
//     }, 0000);
// }

// order(0, production)