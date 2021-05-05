let taskTextInput = document.querySelector('.create-new-todo-form__input')
let addTaskButton = document.querySelector('.create-new-todo-form__button')
let todoList = document.querySelector('.task-table')



addTaskButton.addEventListener('click', addToDo)

function addToDo (e) {
    e.preventDefault()

    let inputValue = taskTextInput.value

    let todoTask = document.createElement('li');
    todoTask.classList.add('task')
    let taskText = document.createElement('span')
    taskText.classList.add('task__text')
    taskText.innerHTML = inputValue
    todoTask.append(taskText)
    todoList.append(todoTask);

    let buttonWrapper = document.createElement('div')
    todoTask.append(buttonWrapper)
    checkButton = document.createElement('button')
    trashButton = document.createElement('button')
    
    creatingButtons(checkButton, 'fa-check')
    creatingButtons(trashButton, 'fa-trash-alt')

    checkButton.addEventListener('click', () => {
        todoTask.classList.toggle('completed')
        checkButton.classList.toggle('completed')
    })

    trashButton.addEventListener('click', () => {
        todoTask.remove();
    })
    taskTextInput.value = ''

    function creatingButtons (createButton, imgType) {
        buttonWrapper.append(createButton)
        createButton.classList.add('task__button')
        buttonImg = document.createElement('i')
        buttonImg.classList.add('fas')
        buttonImg.classList.add(imgType)
        createButton.append(buttonImg)

    }
}


