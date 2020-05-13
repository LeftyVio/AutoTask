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

let that;

let tasksByDay;

let today = moment();
let todayStr = today.format("YYYY-MM-DD");
let todayDate = today.format("dddd, MM/DD");
let tomorrow = moment().add(1, "days");
let tomorrowStr = tomorrow.format("YYYY-MM-DD");
let tomorrowDate = tomorrow.format("dddd, MM/DD");
let day3 = moment().add(2, "days");
let day3Str = day3.format("YYYY-MM-DD");
let day3Date = day3.format("dddd, MM/DD");
let day4 = moment().add(3, "days");
let day4Str = day4.format("YYYY-MM-DD");
let day4Date = day4.format("dddd, MM/DD");
let day5 = moment().add(4, "days");
let day5Str = day5.format("YYYY-MM-DD");
let day5Date = day5.format("dddd, MM/DD");
let day6 = moment().add(5, "days");
let day6Str = day6.format("YYYY-MM-DD");
let day6Date = day6.format("dddd, MM/DD");
let week = moment().add(6, "days");
let weekDate = week.format("dddd, MM/DD");
let weekStr = week.format("YYYY-MM-DD");

let todayTitle = today.format("MMM DD");
let weekTitle = week.format("MMM DD");

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
  let assignmentDay = moment().format("YYYY-MM-DD");
  let assignmentStart;
  let assignmentEnd;

  for (let i = 0; i < 7; i++) {
    let dateTemp = dateTempPre.add(1, "days");
    let tasksTemp = await TaskStorage.getAllTasks(
      dateTemp.format("YYYY-MM-DD")
    );
    if (
      tasksTemp == undefined ||
      tasksTemp == null ||
      tasksTemp === "[object Object]"
    ) {
      tasksTemp = { tasks: [] };
    }
    let dayTasksTemp = {
      [dateTemp.format("YYYY-MM-DD")]: tasksTemp.tasks.sort(function (a, b) {
        return parseInt(a.priority) - parseInt(b.priority);
      }),
    };

    assignmentStart = moment(assignmentDay + "T16:00:00-08:00");
    assignmentEnd = assignmentStart.add(
      dayTasksTemp[dateTemp.format("YYYY-MM-DD")][i],
      "minutes"
    );
    for (
      let j = 0;
      j < dayTasksTemp[dateTemp.format("YYYY-MM-DD")].length;
      j++
    ) {
      dayTasksTemp[dateTemp.format("YYYY-MM-DD")][j][
        "assignmentStart"
      ] = assignmentStart;
      dayTasksTemp[dateTemp.format("YYYY-MM-DD")][j][
        "assignmentEnd"
      ] = assignmentEnd;
    }
    console.log(dayTasksTemp);
    temp = Object.assign(temp, dayTasksTemp);
  }

  tasksByDay = temp;
  console.log(tasksByDay);
  that.forceUpdate();
}

export class WeekScreen extends React.Component {
  async UNSAFE_componentWillMount() {
    that = this;
    await fetchClassesForWeek();
    while (tasksByDay == undefined || tasksByDay == {}) {
      // sadly, this is the most effective way ive found to get this to work
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
    if (tasksByDay == undefined || tasksByDay == null || tasksByDay == {}) {
      return <View style={styles.container} />;
    } else {
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
              <Text style={styles.title}>
                {todayTitle}~{weekTitle}
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <ScrollView>
              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{todayDate}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[todayStr].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{tomorrowDate}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[tomorrowStr].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{day3Date}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[day3Str].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{day4Date}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[day4Str].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{day5Date}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[day5Str].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{day6Date}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[day6Str].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <View style={styles.dayTitle}>
                    <Text style={styles.dayText}>{weekDate}</Text>
                  </View>
                  <View style={styles.boxes}>
                    <View style={styles.yellowBox} />
                    <View style={styles.redBox} />
                  </View>
                </View>
                {tasksByDay[weekStr].map((item) => (
                  <View>
                    <View style={styles.work}>
                      <View style={styles.times}>
                        <Text style={styles.yellowText}>Start Time</Text>
                        <Text style={styles.yellowText}>|</Text>
                        <Text style={styles.yellowText}>End Time</Text>
                      </View>
                      <View style={styles.wTask}>
                        <Text style={{ fontSize: 15 }}>
                          {item.subject}: {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                          Priority: {item.priority}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.deadline}>
                      <View style={styles.times}>
                        <Text style={styles.redText}>Deadline:</Text>
                      </View>
                      <View style={styles.dTask}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.dueDate}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              <View style={{ height: 30 }} />
            </ScrollView>
          </View>
        </View>
      );
    }
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
    width: deviceWidth / 2,
    //borderWidth: 1
  },
  deadline: {
    flexDirection: "row",
    //borderWidth: 1
  },
  dTask: {
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
