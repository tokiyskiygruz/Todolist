let input = document.querySelector('.todo-article_input')
let btn = document.querySelector('.add-todo_button')
let todoUl = document.querySelector('.todo')


btn.addEventListener('click', () => {
    let inputValue = input.value 
    function AddTodo () {

        let li = document.createElement('li');
        li.innerHTML = inputValue
        todoUl.append(li);

        let check = document.createElement('i')
        check.classList.add('fas')
        check.classList.add('fa-check')
        li.append(check)

        let trash = document.createElement('i')
        trash.classList.add('fas')
        trash.classList.add('fa-trash-alt')
        li.append(trash)

        check.addEventListener('click', () => {
            function completedToDo() {
                li.classList.toggle('completed')
            }
            completedToDo();
        })

        trash.addEventListener('click', () => {
            function deleteLi() {
                li.remove();
            }
            deleteLi()
        })
        input.value = ''
    }
    AddTodo();
})
