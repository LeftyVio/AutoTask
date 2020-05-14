import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TextInput,
  Button,
  AsyncStorage,
} from "react-native";
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class LoginScreen extends React.Component {
  state = {
    logUser: "",
    logPass: "",
  };

  async checkLogin() {
    if (this.state.logUser == "") {
      alert("Please enter a username or email.");
      return;
    } else if (this.state.logPass == "") {
      alert("Please enter your password.");
      return;
    } else {
      await AsyncStorage.setItem("@Login:username", this.state.logUser);
      await AsyncStorage.setItem("@Login:password", this.state.logPass);
      this.props.navigation.navigate("NavScreen");
    }
  }

  async UNSAFE_componentWillMount() {
    let tempU = await AsyncStorage.getItem("@Login:username");
    let tempP = await AsyncStorage.getItem("@Login:password");
    if (tempU != null && tempP != null) {
      this.props.navigation.navigate("NavScreen");
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>AutoTask</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text1}>Log in</Text>
          <TextInput
            style={styles.inputBars}
            onChangeText={(logUser) => this.setState({ logUser })}
            placeholder="Username or email"
            value={this.state.logUser}
          />
          <TextInput
            style={styles.inputBars}
            onChangeText={(logPass) => this.setState({ logPass })}
            value={this.state.logPass}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={{ height: deviceHeight / 30 }} />
          <Button
            style={styles.button}
            title="Log in"
            onPress={async () => await this.checkLogin()}
          />

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={styles.text2}>Don't have an account?</Text>

            <TouchableHighlight
              onPress={() => {
                alert("You have signed up!");
              }}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableHighlight>
          </View>
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
    height: (deviceHeight / 7) * 1,
    backgroundColor: "#1c1f4c",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
  },

  contentContainer: {
    height: (deviceHeight / 7) * 6,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 18,
    margin: 10,
  },
  text2: {
    fontSize: 14,
    margin: 5,
  },
  inputBars: {
    width: 3 * (deviceWidth / 4),
    height: 30,
    borderWidth: 1,
    margin: 10,
    borderRadius: 7,
    paddingLeft: 3,
  },
  button: {
    width: 1.75 * (deviceWidth / 3),
    height: 25,
    borderRadius: 5,
  },
  signUpText: {
    fontSize: 14,
    margin: 1,
    color: "blue",
  },
});
