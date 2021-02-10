// import required class's
import { openDB } from 'https://unpkg.com/idb?module';

import { DBConfig } from "./DBConfig.js"
import { UI } from "./UI.js";


//The UI Object 
const My_UI = new UI(taskList);



class DB {



    constructor() {

        const DBConfigV = new DBConfig();
        DBConfigV.createDB(openDB);


    }



    async addTask(taskname) {

        const DB = await openDB('tasks', 1);
        DB.add('tasks', { taskname, date: new Date() })
            .then(result => {
                console.log('Successfully Added to Database!');
                //display data 
                this.displayTasks().then(() => {
                    console.log("Display All !!");
                })
            })
            .catch(err => {
                console.error('error: ', err);
            });

        DB.close();

    }


    async displayTasks() {


        const DB = await openDB('tasks', 1);

        if (DB) {
            const alltaskList = await DB.getAllFromIndex('tasks', 'date')

            My_UI.addTaskListToUI(alltaskList);
        }

        DB.close();

    }

}

export { DB };