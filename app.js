let input = document.querySelector('.todo-article__input')
let btn = document.querySelector('.add-todo__button')
let todoUl = document.querySelector('.todo')


btn.addEventListener('click', () => {
    let inputValue = input.value 
    function addTodo () {

        let todoTask = document.createElement('li');
        todoTask.classList.add('task')
        let taskText = document.createElement('span')
        taskText.classList.add('task__text')
        taskText.innerHTML = inputValue
        todoTask.append(taskText)
        todoUl.append(todoTask);

        let buttonWrapper = document.createElement('div')
        todoTask.append(buttonWrapper)
        let checkButton = document.createElement('button')
        checkButton.classList.add('task__button')
        buttonWrapper.append(checkButton)
        let buttonImgCheck = document.createElement('i')
        buttonImgCheck.classList.add('fas')
        buttonImgCheck.classList.add('fa-check')
        checkButton.append(buttonImgCheck)

        let trashButton = document.createElement('button')
        buttonWrapper.append(trashButton)
        trashButton.classList.add('task__button')
        let buttonImgTrash = document.createElement('i')
        buttonImgTrash.classList.add('fas')
        buttonImgTrash.classList.add('fa-trash-alt')
        trashButton.append(buttonImgTrash)

        checkButton.addEventListener('click', () => {
            todoTask.classList.toggle('completed')
            checkButton.classList.toggle('completed')
        })

        trashButton.addEventListener('click', () => {
            todoTask.remove();
        })
        input.value = ''
    }
    addTodo();
})
