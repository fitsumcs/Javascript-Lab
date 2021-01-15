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