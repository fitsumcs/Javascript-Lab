// Add to LocalStorage function declaration 
function addToDatabase(newTask) {
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } else {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    listofTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listofTasks));


}

// Load task from local storage function declaration 
function loadfromDB() {
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } else {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return listofTasks;
}