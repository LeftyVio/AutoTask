import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>About Page</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ margin: 50 }}>
            <Text style={{ fontWeight: "bold" }}>AutoTask created by</Text>{" "}
            Anthony Wang, Yunnie Kim, and Madeline Gozun{"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Support:</Text>{" "}
            autotask.app.oa@gmail.com
          </Text>
        </View>
      </View>
    );
  } // a l s o   a i d e n   s a t o
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
