//Database variable 
var db;

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

}