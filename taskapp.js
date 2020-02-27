
const inputElement = document.getElementById('todo-input');
const addBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('list');
const todoListChildren = document.getElementById('list-children');

addBtn.addEventListener('click',(event) =>{
    let inputVal = inputElement.value;
    inputElement.value = '';

    const todoListChild = document.createElement('li');
    todoListChild.setAttribute('class', 'list-child');
    const todoItem = document.createElement("span");
    const todoBtn = document.createElement('button');
    todoBtn.setAttribute('class', 'fas fa-trash');
    const todoInput = document.createElement('input');
    todoInput.setAttribute('type', 'checkbox');
    todoItem.textContent = inputVal;
    todoListChild.appendChild(todoInput);
    todoListChild.appendChild(todoItem);
    todoListChild.appendChild(todoBtn);

    todoListChildren.append(todoListChild);
    todoList.append(todoListChildren);

    todoInput.addEventListener("click", (event) =>{
       
    });

    todoBtn.addEventListener("click", (event) =>{
    todoListChildren.removeChild(todoListChild);
    })

});



