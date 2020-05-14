import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AsyncStorage,
  Button,
  Switch,
} from "react-native";
import { NavScreen } from "../screens/nav_screen";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

let returnToWeek = false;

async function logOut() {
  AsyncStorage.removeItem("@Login:username");
  AsyncStorage.removeItem("@Login:password");
  NavScreen.navToStart();
}

export async function getSetting(key) {
  let username = await AsyncStorage.getItem("@Login:username");
  let password = await AsyncStorage.getItem("@Login:password");
  return await AsyncStorage.getItem(
    "@Settings:" + username + ":" + password + ":" + key
  );
}

export async function saveSetting(key, value) {
  let username = await AsyncStorage.getItem("@Login:username");
  let password = await AsyncStorage.getItem("@Login:password");
  value = value + "";
  await AsyncStorage.setItem(
    "@Settings:" + username + ":" + password + ":" + key,
    value
  );
}

let that;

export async function fetchSetting() {
  that.grabSetting();
}

export class SettingsScreen extends React.Component {
  state = {
    returnToWeek: returnToWeek,
  };

  async setReturnToWeek(input) {
    await saveSetting("returnToWeek", input);
    returnToWeek = input;
    this.setState({ returnToWeek: input });
  }

  async UNSAFE_componentWillMount() {
    that = this;
    await this.grabSetting();
  }

  async grabSetting() {
    let done = false;
    let tempCan = await getSetting("returnToWeek");
    if (tempCan == true || tempCan == "true") {
      returnToWeek = true;
      this.setState({ returnToWeek: true });
    } else {
      returnToWeek = false;
      this.setState({ returnToWeek: false });
    }
    done = true;
    while (!done) {}
    this.forceUpdate();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Return to week-view after inputting assignment</Text>
            <View style={{ width: 20 }} />
            <Switch
              onValueChange={async (input) => await this.setReturnToWeek(input)}
              value={this.state.returnToWeek}
            />
          </View>
          <View style={{ height: deviceHeight / 16 }} />
          <Button title="Log Out" onPress={async () => await logOut()} />
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
    justifyContent: "center",
  },
});
