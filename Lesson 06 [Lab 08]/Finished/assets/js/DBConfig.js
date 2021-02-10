class DBConfig {


    constructor() {

    }

    createDB(openDB) {
        openDB('tasks', 1, {
            upgrade(db) {

                let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
                // createindex: 1) field name 2) keypath 3) options
                objectStore.createIndex('taskname', 'taskname', { unique: false });
                objectStore.createIndex('date', 'date', { unique: false });

            },
        });


    }


}



export { DBConfig }