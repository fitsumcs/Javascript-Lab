function createDB(openDB) {
    openDB('tasks', 1, {
        upgrade(db) {

            db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
            //db.createObjectStore('tasks', { autoIncrement: true });

        },
    });


}


export { createDB }