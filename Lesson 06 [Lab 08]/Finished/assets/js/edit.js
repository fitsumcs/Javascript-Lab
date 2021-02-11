// import required class's
import { DB } from "./DB.js";



//The UI Object 
const My_DB = new DB();


console.log(My_DB);

//UI variables 
const form1 = document.querySelector('#task-form1'); //The form at the top
const taskInput1 = document.querySelector('#task1'); //the task input text field

//read from q string 
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));


// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // display the Task 
    displayTask();

});


function displayTask() {

    My_DB.getTask(id).then((task) => {
        taskInput1.value = task.taskname;

    })



}


form1.addEventListener('submit', updateTask);

function updateTask(e) {
    e.preventDefault();
    // Check empty entry
    if (taskInput1.value === '') {
        taskInput1.style.borderColor = "red";

        return;
    }

    //Left for you to do 

    history.back();


}