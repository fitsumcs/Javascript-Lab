export class UI {



    constructor() {

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
    }



    addTaskListToUI(cursor) {

        // Create an li element when the user adds a task 
        const li = document.createElement('li');

        //add Attribute for delete 
        li.setAttribute('data-task-id', cursor.value.id);

        // Adding a class
        li.className = 'collection-item';

        // Create text node and append it 
        li.appendChild(document.createTextNode(cursor.value.taskname));

        // Create new element for the link 
        const link = document.createElement('a');

        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';

        //Make sure you change the URL of edit.html so that it works correctly 
        link.innerHTML = `
        <i class="fa fa-remove"></i>
       &nbsp;
       <a href="/Lesson 04 [Lab 06]/Finished/edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a>
       `;

        // Append link to li
        li.appendChild(link);

        // Append to UL 
        this.taskList.appendChild(li);


    }


}