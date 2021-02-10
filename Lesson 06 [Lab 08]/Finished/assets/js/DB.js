import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';

import { createDB } from "./DBConfig.js"




class DB {



    constructor() {

        createDB(openDB);
    }



    async addTask(taskname) {

        const DB = await openDB('tasks', 1);
        DB
            .add('tasks', { taskname })
            .then(result => {
                console.log('success!', result);
            })
            .catch(err => {
                console.error('error: ', err);
            });

        DB.close();

    }

}

export { DB };