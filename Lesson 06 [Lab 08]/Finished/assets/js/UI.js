 class UI {



     constructor(taskList) {

         this.taskList = taskList;


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


 export { UI };