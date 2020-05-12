import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { TaskStorage } from "../classes/task_storage";
import moment from "moment";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

let tasksByDay = {};

let today = moment();
let todayTitle = today.format("MMM DD");
let week = today.add(6, "days");
let weekTitle = week.format("MMM DD");

let todayDate = today.format("dddd, MM/DD");
let tomorrow = today.add(1, "days");
let tomorrowDate = tomorrow.format("dddd, MM/DD");
let day3 = today.add(2, "days");
let day3Date = day3.format("dddd, MM/DD");
let day4 = today.add(2, "days");
let day4Date = day4.format("dddd, MM/DD");
let day5 = today.add(2, "days");
let day5Date = day5.format("dddd, MM/DD");
let weekDate = week.format("dddd, MM/DD");


export async function fetchClassesForWeek() {
  // get today's date, get next weeks date, for loop through saved stuff into arrays by date, set tasksByDay
  let today = moment();
  let temp = {};
  /*
    {
      "2020-05-11":  <- equivalent to tasks array
        [

        ],
      "2020-05-12", etc.
    }
  //*/
  let dateTempPre = today.subtract(1, "days");
  today.add(1, "days");
  for (let i = 0; i < 7; i++) {
    let dateTemp = dateTempPre.add(1, "days");
    let tasksTemp = await TaskStorage.getAllTasks(dateTemp.format("YYYY-MM-DD"));
    if (tasksTemp == undefined || tasksTemp == null || tasksTemp === "[object Object]") {
      tasksTemp = {tasks: []};
    }
    let dayTasksTemp = {[dateTemp.format("YYYY-MM-DD")]: tasksTemp.tasks};
    temp = Object.assign(temp, dayTasksTemp);
  }
  console.log(temp)
  tasksByDay = temp;
}

export class WeekScreen extends React.Component {
  async UNSAFE_componentWillMount() {
    await fetchClassesForWeek();
    while(tasksByDay == undefined || tasksByDay == {}) { // sadly, this is the most effective way ive found to get this to work

    }
    this.forceUpdate();
  }

  state = {
    week: [
      {
        name: "Sunday",
        work: "true",
        deadline: "true",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Monday",
        work: "true",
        deadline: "false",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Tuesday",
        work: "true",
        deadline: "false",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Wednesday",
        work: "true",
        deadline: "true",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Thursday",
        work: "true",
        deadline: "true",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Friday",
        work: "false",
        deadline: "true",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
      {
        name: "Saturday",
        work: "false",
        deadline: "false",
        workTime1: "6:30 PM",
        workTime2: "7:30 PM",
        deadlineTime: "11:59 PM",
        workType: "Exercise",
        deadlineType: "ENGLISH PAPER",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View
            style={{
              height: deviceHeight / 11,
              width: deviceWidth / 3,
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../images/Icons/hamburgerMenuIcon.png")}
            />
          </View>
          <View
            style={{
              height: deviceHeight / 11,
              width: (deviceWidth / 3) * 2,
              justifyContent: "center",
            }}
          >
            <Text style={styles.title}>{todayTitle}~{weekTitle}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView>
            {tasksByDay[today.format("YYYY-MM-DD")].map(item => (
              <View>
                <View style={{flexDirection: "row", marginTop: 15}}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{todayDate}</Text>
                  </View>

                  <View style={styles.boxes}>
                    <View style={styles.yellowBox}/>
                    <View style={styles.redBox}/>
                  </View>
                </View>

                <View style={styles.work}>
                  <View style={styles.times}>
                    <Text style={styles.yellowText}>Start Time</Text>
                    <Text style={styles.yellowText}>|</Text>
                    <Text style={styles.yellowText}>End Time</Text>
                  </View>
                  <View style={styles.wTask}>
                    <Text style={{fontSize: 15}}>{day.workType}</Text>
                  </View>
                </View>

                <View style={styles.deadline}>
                  <View style={styles.times}>
                    <Text style={styles.redText}>{day.deadlineTime}</Text>
                  </View>
                  <View style={styles.dTask}>
                    <Text style={{fontSize: 15, fontWeight: "bold"}}>
                      {day.deadlineType}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "stretch",
    justifyContent: "center",
  },

  topBar: {
    flexDirection: "row",
    height: deviceHeight / 11,
    width: deviceWidth,
    backgroundColor: "#1c1f4c",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
  },

  contentContainer: {
    height: (deviceHeight / 11) * 9.25,
    width: deviceWidth,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  dayTitle: {
    height: deviceHeight / 15,
    width: (deviceWidth / 7) * 4,
    paddingLeft: 20,
    fontSize: 10,
    justifyContent: "center",
    //borderWidth: 1
  },
  dayText: {
    fontSize: 20,
  },
  boxes: {
    flexDirection: "row",
    alignItems: "center",
    height: deviceHeight / 15,
    width: (deviceWidth / 7) * 3,
    //borderWidth: 1
  },
  yellowBox: {
    marginLeft: 15,
    height: deviceWidth / 15,
    width: deviceWidth / 15,
    backgroundColor: "#fec20f",
  },
  redBox: {
    marginLeft: 15,
    height: deviceWidth / 15,
    width: deviceWidth / 15,
    backgroundColor: "#ff5757",
  },
  work: {
    flexDirection: "row",
    //borderWidth: 1
  },
  times: {
    width: deviceWidth / 2,
    paddingLeft: 45,
    //borderWidth: 1
  },
  yellowText: {
    color: "#fec20f",
    fontSize: 15,
  },
  redText: {
    color: "#ff5757",
    fontSize: 15,
  },
  wTask: {
    fontSize: 15,
    width: deviceWidth / 2,
   // borderWidth: 1
  },
  deadline: {
    flexDirection: "row",
    //borderWidth: 1
  },
  dTask: {
    fontSize: 15,
    width: deviceWidth / 2,
    fontStyle: "bold",
    //borderWidth: 1
  },
  navBar: {
    flex: 3,
    backgroundColor: "#fec20f",
    borderTopWidth: 2,
  },
});
