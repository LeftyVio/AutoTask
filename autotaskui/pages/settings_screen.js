import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AsyncStorage,
  Button
} from 'react-native';
import { NavScreen } from "../screens/nav_screen"

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

async function logOut() {
  AsyncStorage.removeItem("@Login:username");
  AsyncStorage.removeItem("@Login:password");
  NavScreen.navToStart();
}

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.contentContainer}>
          <Button title="Log Out" onPress={async () => await logOut()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topBar: {
    height: deviceHeight / 11,
    width: deviceWidth,
    backgroundColor: '#1c1f4c',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },

  contentContainer: {
    height: deviceHeight / 11 * 9.25,
    width: deviceWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
