 class UI {



     constructor() {




     }



     addTaskListToUI(tasks) {

         // clear the previous task list
         while (taskList.firstChild) {
             taskList.removeChild(taskList.firstChild);
         }


         tasks.forEach(({ id, taskname }) => {


             // Create an li element when the user adds a task 
             const li = document.createElement('li');

             //add Attribute for delete 
             li.setAttribute('data-task-id', id);

             // Adding a class
             li.className = 'collection-item';

             // Create text node and append it 
             li.appendChild(document.createTextNode(taskname));

             // Create new element for the link 
             const link = document.createElement('a');

             // Add class and the x marker for a 
             link.className = 'delete-item secondary-content';

             //Make sure you change the URL of edit.html so that it works correctly 
             link.innerHTML = ` 
                         
                        <i class="fa fa-remove"></i>
                           &nbsp;
                         <a href="/Lesson 06 [Lab 08]/Finished/edit.html?id=${id}"><i class="fa fa-edit"></i> </a>
                           
                            `;

             // Append link to li
             li.appendChild(link);

             // Append to UL 
             taskList.appendChild(li);

         });

     }


     //Delete a Task 



 }


 export { UI };