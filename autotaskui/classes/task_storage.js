import { AsyncStorage } from "react-native";

const TASK_STORAGE = "@TaskStorage:";

//represent data as array within json
/*
  {
    "tasks": [
      {
        "subject": "math",
        "name": "assignment",
        "due date": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
      {
        "subject": "math",
        "name": "assignment",
        "due date": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
      {
        "subject": "math",
        "name": "assignment",
        "due date": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
    ]

  }
//*/

export class TaskStorage {
  async getAllTasks(date) { // date is a string, YYYY-MM-DD
    let temp = AsyncStorage.getItem(TASK_STORAGE + date);
    return temp;
  }

  async getTask(date, name) {
    let temp = await AsyncStorage.getItem(TASK_STORAGE + date);
    result = temp.tasks.filter(item => item.name.toLowerCase() == name.toLowerCase());
    return result;
  }

  async setTask(date, task) {
    let temp = await AsyncStorage.getItem(TASK_STORAGE + date);
    if (temp == undefined || temp == null) {
      temp = {tasks: []};
    }
    temp.tasks.push(task);
    await AsyncStorage.setItem(TASK_STORAGE + date, temp);
  }

  async forceSetAllTasks(date, tasksObj) {
    await AsyncStorage.setItem(TASK_STORAGE + date, tasksObj);
  }
}