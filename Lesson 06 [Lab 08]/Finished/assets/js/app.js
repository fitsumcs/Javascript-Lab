// import UI class 
import UI from "./UI.js";

const UI = new UI();

//DB variable 

let DB;



// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        // UI.displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });

        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addNewTask);

    function addNewTask(e) {
        e.preventDefault();

        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }

        // create a new object with the form info
        let newTask = {
            taskname: taskInput.value,
        }

        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');

        let request = objectStore.add(newTask);

        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');

            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }

    }

    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                addTaskListToUI(cursor);

                cursor.continue();
            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the task id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    //clear button event listener   
    clearBtn.addEventListener('click', clearAllTasks);

    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");
        // clear the table.
        tasks.clear();
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }


});