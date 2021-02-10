// import required class's
import { DB } from "./DB.js";



//The UI Object 
const My_DB = new DB();



// DOM Load
document.addEventListener('DOMContentLoaded', () => {

    My_DB.displayTasks(taskList);

});

//clear button event listener   
clearBtn.addEventListener('click', () => {
    My_DB.clearAllTasks();

});


form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (taskInput.value === '') {

        alert("Enter a Task !!!")
    }

    My_DB.addTask(taskInput.value);

})