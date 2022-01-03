//referencing html elements
const inputText = document.querySelector("#add-todo");
const submitBtn = document.querySelector("#submit-btn");
const todoList = document.querySelector(".todo-list");
const options = document.querySelector("#filter-todos");
const todo = document.querySelector(".todo-div");
const starBtn = document.querySelector('.star-btn');
//event listeners

submitBtn.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheckStar);
// todoList.addEventListener('click', starTodo);
options.addEventListener("click", filterTodo);

//functions

function addTodo(event) {
    if(inputText.value === "") {
        alert("Input is required for a todo to be added!");
    } else {
    //prevent form from submitting
    event.preventDefault();
    //todo div
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

    //star btn
    const starBtn = document.createElement("button");
    starBtn.innerHTML = '<i class="fas fa-star"></i>';
    starBtn.classList.add("star-btn");

    //append star btn to todo div
    todoDiv.appendChild(starBtn);

    //append whole div to ul
    todoList.appendChild(todoDiv);

    //clear todo input value
    inputText.value = "";
    }
}

function deleteCheckStar(e) {
    const item = e.target;
    //delete todo
    if(item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
        todo.remove();
    };

   //check mark
   if(item.classList[0] === "done-btn") {
       const todo = item.parentElement;
       todo.classList.toggle("done");
   }   

   if(item.classList[0] === "star-btn") {
    const todo = e.target;
    const selected = document.activeElement;
    todo.classList.toggle("selected");
   }
}

// function starTodo(e) {
    
// }

function filterTodo(e) {
    let todos = todoList.children; //1 2 3 4
    for(let i=0;i<todos.length;i++){
    console.log(todos[i].classList);

        if(e.target.value === "All") {
                todos[i].style.display = "flex";
        }
        else if(e.target.value === "Completed") {
            if(todos[i].classList.contains("done")) {
                // console.log("1");
                todos[i].style.display = "flex";
            } else {                    
                // console.log("2");
                todos[i].style.display = "none";
            }
        }
        else if(e.target.value === "Uncompleted"){
            if(!todos[i].classList.contains("done")) {
                // console.log("11");
                todos[i].style.display = "flex";
            } else {
                // console.log("12");
                todos[i].style.display = "none";
            }
        }
        else if(e.target.value === "Starred") {
            if(todos[i].classList.contains("selected")) {
                console.log("1");
                todos[i].style.display = "flex";
            } else {                    
                console.log("2");
                todos[i].style.display = "none";
            }
        }
    }
}