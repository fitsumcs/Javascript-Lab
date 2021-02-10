 class UI {



     constructor(taskList) {

         this.taskList = taskList;


     }



     addTaskListToUI(tasks) {

         // clear the previous task list
         while (taskList.firstChild) {
             taskList.removeChild(taskList.firstChild);
         }


         tasks.forEach(task => {

             // Create an li element when the user adds a task 
             const li = document.createElement('li');

             //add Attribute for delete 
             li.setAttribute('data-task-id', task.id);

             // Adding a class
             li.className = 'collection-item';

             // Create text node and append it 
             li.appendChild(document.createTextNode(task.taskname));

             // Create new element for the link 
             const link = document.createElement('a');

             // Add class and the x marker for a 
             link.className = 'delete-item secondary-content';

             //Make sure you change the URL of edit.html so that it works correctly 
             link.innerHTML = `
        <i class="fa fa-remove"></i>
       &nbsp;
       <a href="/Lesson 04 [Lab 06]/Finished/edit.html?id=${task.id}"><i class="fa fa-edit"></i> </a>
       `;

             // Append link to li
             li.appendChild(link);

             // Append to UL 
             this.taskList.appendChild(li);

         });







     }


 }


 export { UI };