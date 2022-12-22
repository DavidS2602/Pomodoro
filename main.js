const tasks = []
let time = 0
let timer = null
let timerBreak = null
let current = null

const bAdd = document.querySelector("#Agregar")
const itTask = document.querySelector("#itTask")
const form = document.querySelector('#form')

form.addEventListener('click', e => {
    e.preventDefault()//Anuilamos el funcionamiento nativo
    if (itTask.value !== '') {
        createTask(itTask.value)
        itTask.value = ''

    }
})
function itTask(value) {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),//Que se genere aleatoriamente.
        title: value,
        completed: false
    }
    tasks.unshift(newTask)//Agrega los elementos al inicio de un array.
}
function renderTasks() {
    const html = tasks.map()
}