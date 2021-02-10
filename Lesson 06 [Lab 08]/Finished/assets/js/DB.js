import { openDB } from 'https://unpkg.com/idb?module';

import { DBConfig } from "./DBConfig.js"




class DB {



    constructor() {

        const DBConfigV = new DBConfig();
        DBConfigV.createDB(openDB);
    }



    async addTask(taskname) {

        const DB = await openDB('tasks', 1);
        DB.add('tasks', { taskname, date: new Date() })
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