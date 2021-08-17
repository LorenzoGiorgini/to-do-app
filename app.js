const taskInput = document.querySelector("#input");
const inputButton = document.querySelector("#input-button");
const taskList = document.querySelector("#task-list");

inputButton.addEventListener("click", addTask);

taskList.addEventListener("click", removeTask);

function addTask (e) {
    if(taskInput.value === "") {
        alert("Scrivi qualcosa");
    }

    //creare nuovo li e creare una classe per l'li

    const li = document.createElement("li");
    li.className = "task";

    //Creare nuovo text node e metterlo dentro il nostro li

    li.appendChild(document.createTextNode(taskInput.value))

    //Creo un a tag per mettere una x per cancellare i task

    const link = document.createElement("a");

    //aggiungo una classe alla a tag

    link.className = "delete-task"

    //aggiungi x all-  html
    link.innerHTML = "<h3>X</h3>"

    //metto un link dentro li
    li.appendChild(link);

    //metto li dentro ul
    taskList.appendChild(li);

    taskInput.value = "";

    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-task")) {
        e.target.parentElement.parentElement.remove();
    }
}