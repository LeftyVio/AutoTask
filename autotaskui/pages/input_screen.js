import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Picker,
  Button,
} from "react-native";
import { TaskStorage } from "../classes/task_storage";
import moment from "moment";
import { fetchClassesForWeek } from "./week_screen";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class InputScreen extends React.Component {
  state = {
    selected: undefined,
    switchValue: false,
    inputText1: "",
    inputText2: "",
    inputText3: "",
    inputText4: "",
    priorityNum: "1",
    itemIndex: "",
  };

  async addAssignment() {
    // check to make sure boxes are filled, setup json object, store json object, refetch json object, clear fields
    if (
      this.state.inputText1 == "" ||
      this.state.inputText2 == "" ||
      this.state.inputText3 == "" ||
      this.state.inputText4 == ""
    ) {
      alert("u dumb. fill all space.");
      return;
    }

    let date = moment(this.state.inputText3, "MM-DD-YYYY").subtract(1, "day");
    let dateStr = date.format("YYYY-MM-DD");
    let due = moment(this.state.inputText3, "MM-DD-YYYY");
    let dueStr = due.format("YYYY-MM-DD");
    
    if(dateStr == "Invalid date") {
      alert("format date, moron.");
      return;
    }
    if(isNaN(this.state.inputText4)) {
      alert("make sure eta is number, dummy.");
      return;
    }
    let temp = {
      subject: this.state.inputText1,
      name: this.state.inputText2,
      dueDate: dueStr,
      eta: this.state.inputText4,
      priority: this.state.priorityNum,
      assignmentStart: "",
      assignmentEnd: ""
    };

    await TaskStorage.setTask(dateStr, temp);

    await fetchClassesForWeek();

    this.setState({
      inputText1: "",
      inputText2: "",
      inputText3: "",
      inputText4: "",
      priorityNum: "1",
    });

    this.props.navigation.navigate("WeekScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>New Task</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionContainer}>
              <Text style={{ fontSize: 15 }}>Subject</Text>
            </View>
            <View style={styles.optionInputContainer}>
              <TextInput style={styles.optionInput}
                onChangeText={(inputText1) => this.setState({ inputText1 })}
                placeholder="Enter assignment type"
                placeholderTextColor="#979797"
                value={this.state.inputText1}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionContainer}>
              <Text style={{ fontSize: 15 }}>Name</Text>
            </View>
            <View style={styles.optionInputContainer}>
              <TextInput style={styles.optionInput}
                onChangeText={(inputText2) => this.setState({ inputText2 })}
                placeholder="Enter name of assignment"
                placeholderTextColor="#979797"
                value={this.state.inputText2}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionContainer}>
              <Text style={{ fontSize: 15 }}>Due Date</Text>
            </View>
            <View style={styles.optionInputContainer}>
              <TextInput style={styles.optionInput}
                onChangeText={(inputText3) => this.setState({ inputText3 })}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="#979797"
                value={this.state.inputText3}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionContainer}>
              <Text style={{ fontSize: 15 }}>Estimated Time</Text>
            </View>
            <View style={styles.optionInputContainer}>
              <TextInput style={styles.optionInput}
                onChangeText={(inputText4) => this.setState({ inputText4 })}
                placeholder="Time to finish assignment (in min)"
                placeholderTextColor="#979797"
                value={this.state.inputText4}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionContainer}>
              <Text style={{ fontSize: 15 }}>Priority</Text>
            </View>
            <View style={styles.optionInputContainer}>
              <Picker style={styles.optionInput}
                selectedValue={this.state.priorityNum}
                onValueChange={(priorityNum, itemIndex) =>
                  this.setState({ priorityNum })
                }
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
          </View>
          <View style={{ height: deviceHeight / 15 }} />
          <Button title="Submit" onPress={() => this.addAssignment()} />
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
    alignItems: "center",
    justifyContent: "flex-start",
    //borderWidth: 5
  },

  optionContainer: {
    flexDirection: "row",
    height: 84,
    width: deviceWidth / 3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 7,
    paddingBottom: 15,
    //borderWidth: 1
  },
  optionTitle: {
    fontSize: 15,
  },
  optionInputContainer: {
    height: 84,
    width: (deviceWidth / 3) * 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 5,
    //borderWidth: 1
  },
  optionInput: {
    height: 40,
    width: (deviceWidth / 7) * 4 + 10,
    backgroundColor: "#c7c7c7",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 6,
    fontSize: 14,
    //borderWidth: 1
  },
});
