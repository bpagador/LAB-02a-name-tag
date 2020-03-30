const name = document.getElementById('name')

const myButton = document.getElementById('myButton')

function changeName() {
    name.style.color = 'red'
    name.textContent = 'Briseida'
}

myButton.addEventListener('click', changeName)