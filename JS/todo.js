const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deletToDo(){

}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deletToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleTodoSubmit);