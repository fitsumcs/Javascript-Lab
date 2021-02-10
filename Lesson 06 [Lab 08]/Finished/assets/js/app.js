// import UI class 
import { UI } from "./UI.js";
import { DB } from "./DB.js";

// Define UI Variables 

//the task input text field
const taskInput = document.querySelector('#task');
//The form at the top
const form = document.querySelector('#task-form');
//the task filter text field
const filter = document.querySelector('#filter');
//The UL
const taskList = document.querySelector('.collection');
//the all task clear button
const clearBtn = document.querySelector('.clear-tasks');
//the reload button at the top navigation 
const reloadIcon = document.querySelector('.fa');

const My_UI = new UI(taskList);
const My_DB = new DB();


form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (taskInput.value === '') {

        alert("Enter a Task !!!")
    }

    My_DB.addTask(taskInput.value);

})