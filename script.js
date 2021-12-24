//referencing html elements
const inputText = document.querySelector("#add-todo");
const submitBtn = document.querySelector("#submit-btn");
const todoList = document.querySelector(".todo-list");
// const inputText = document.querySelector("#add-todo");

//event listeners
submitBtn.addEventListener("click", addTodo);

//functions
function addTodo(event) {
    event.preventDefault();
    // console.log("hello");
    //div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo-div");

    //li
    const listItem = document.createElement('li');
    listItem.innerText = inputText.value;
    listItem.classList.add("list-item");

    //append li
    todoDiv.appendChild(listItem);

    //check btn
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    doneBtn.classList.add("done-btn");

    //append check btn
    todoDiv.appendChild(doneBtn);

    //delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");

    //append delete btn
    todoDiv.appendChild(deleteBtn);

    //append whole div to ul
    todoList.appendChild(todoDiv);

    //clear todo input value
    inputText.value = "";
    
    doneBtn.addEventListener("click", doneTodo);

    function doneTodo(event) {
        console.log(inputText.value);
        // let listItemValue = inputText.value;
        listItem.innerText.style.textDecoration = "strikethrough";
    }
    
    


}


