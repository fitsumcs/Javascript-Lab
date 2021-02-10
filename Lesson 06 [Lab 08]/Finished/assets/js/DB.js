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



    //Add New Task to Database 
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


    //Display All Tasks 
    async displayTasks() {


        const DB = await openDB('tasks', 1);

        if (DB) {
            const all_tasks = await DB.getAllFromIndex('tasks', 'date')

            //Paint the UI 
            My_UI.addTaskListToUI(all_tasks);
        }

        DB.close();

    }


    //Clear All Tasks 
    async clearAllTasks() {
        const DB = await openDB('tasks', 1);

        DB.clear('tasks').then(() => {
            this.displayTasks()
        })
    }




}

export { DB };