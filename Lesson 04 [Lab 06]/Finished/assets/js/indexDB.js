//Database variable 
var db;


//execute on load 
function onLoad() {
    // create the database
    let openRequest = indexedDB.open("MyTasks", 1);

    //on Database successfully created
    openRequest.onsuccess = function(event) {
        db = openRequest.result;
        console.log('The database is opened successfully');

    };
    //on error occurred at opening the Database 
    openRequest.onerror = function(event) {
        console.log('The database is opened failed');
    };
    //upgrade , this is called only once the db is created or version changed 
    openRequest.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('tasks')) {
            objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
        }

        objectStore.createIndex('taskName', 'taskName', { unique: false });

    }
}





function addToDB(taskName) {

    let task = {
        taskName
    }

    let transaction = db.transaction("tasks", "readwrite"); // (1)

    // get an object store to operate on it
    let books = transaction.objectStore("tasks"); // (2)

    let request = books.add(task); // (3)

    request.onsuccess = function() { // (4)
        console.log("Task  added Succfullly!! ", request.result);
    };

    request.onerror = function() {
        console.log("Error", request.error);
    };
}