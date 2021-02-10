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



// Remove task event [event delegation]
taskList.addEventListener('click', (e) => {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            // get the task id
            let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
            // use a transaction

            My_DB.deleteTask(taskID).then(() => {
                e.target.parentElement.parentElement.remove();
            });




        }

    }

});