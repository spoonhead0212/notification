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

