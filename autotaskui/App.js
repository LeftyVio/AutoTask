import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { NavScreen } from './screens/nav_screen.js';
import { LoginScreen } from './screens/login_screen.js';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class AutoTask extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

export const Navigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  NavScreen: {
    screen: NavScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

export const AppNavigator = createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  contentContainer: {
    height: deviceHeight/11*10.25,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flexDirection: 'row',
    height: deviceHeight/11*0.75,
    width: deviceWidth,
    backgroundColor: '#fec20f',
    borderTopWidth: 2,
  },
});