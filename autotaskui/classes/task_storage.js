import { AsyncStorage } from "react-native";

const TASK_STORAGE = "@TaskStorage:";

//represent data as array within json
/*
  {
    "tasks": [
      {
        "subject": "math",
        "name": "assignment",
        "dueDate": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
      {
        "subject": "math",
        "name": "assignment",
        "dueDate": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
      {
        "subject": "math",
        "name": "assignment",
        "dueDate": "05/17/2020",
        "eta": "50",
        "priority": "2"
      },
    ]

  }
//*/

export class TaskStorage {
  static async getAllTasks(date) {
    // date is a string, YYYY-MM-DD
    let temp = await AsyncStorage.getItem(
      TASK_STORAGE +
        ":" +
        (await AsyncStorage.getItem("@Login:username")) +
        ":" +
        (await AsyncStorage.getItem("@Login:password")) +
        ":" +
        date
    );
    if (temp == undefined || temp == null || temp === "[object Object]") {
      return { tasks: [] };
    }
    let tempJSON = JSON.parse(temp);
    return tempJSON;
  }

  static async getTask(date, name) {
    let temp1 = await AsyncStorage.getItem(
      TASK_STORAGE +
        ":" +
        (await AsyncStorage.getItem("@Login:username")) +
        ":" +
        (await AsyncStorage.getItem("@Login:password")) +
        ":" +
        date
    );
    let temp = JSON.parse(temp1);
    result = temp.tasks.filter(
      (item) => item.name.toLowerCase() == name.toLowerCase()
    );
    return result;
  }

  static async setTask(date, task) {
    let temp = await AsyncStorage.getItem(
      TASK_STORAGE +
        ":" +
        (await AsyncStorage.getItem("@Login:username")) +
        ":" +
        (await AsyncStorage.getItem("@Login:password")) +
        ":" +
        date
    );
    temp = JSON.parse(temp);
    if (temp == undefined || temp == null || temp === "[object Object]") {
      temp = { tasks: [] };
    }
    temp.tasks.push(task);
    let temp2 = JSON.stringify(temp);
    await AsyncStorage.setItem(
      TASK_STORAGE +
        ":" +
        (await AsyncStorage.getItem("@Login:username")) +
        ":" +
        (await AsyncStorage.getItem("@Login:password")) +
        ":" +
        date,
      temp2
    );
  }

  static async forceSetAllTasks(date, tasksObj) {
    await AsyncStorage.setItem(
      TASK_STORAGE +
        ":" +
        (await AsyncStorage.getItem("@Login:username")) +
        ":" +
        (await AsyncStorage.getItem("@Login:password")) +
        ":" +
        date,
      JSON.stringify(tasksObj)
    );
  }
}
