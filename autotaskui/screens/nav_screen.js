import React from 'react';
import { StyleSheet,
         View,
         Image,
         TouchableOpacity,
         Dimensions } from 'react-native';

import { SettingsScreen } from '../pages/settings_screen.js'
import { WeekScreen } from '../pages/week_screen.js';
import { InputScreen } from '../pages/input_screen.js';
import { AboutScreen } from '../pages/about_screen.js';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class NavScreen extends React.Component {
    state = {
        weekDisplay: 'block',
        inputDisplay: 'none',
        settingsDisplay: 'none',
        aboutDisplay: 'none',
    };
    
    setWeekDisplay = () => this.setState(state => ({
        weekDisplay: 'block',
        inputDisplay: 'none',
        settingsDisplay: 'none',
        aboutDisplay: 'none',
    }));
    setInputDisplay = () => this.setState(state => ({
        weekDisplay: 'none',
        inputDisplay: 'block',
        settingsDisplay: 'none',
        aboutDisplay: 'none',
    }));
    setSettingsDisplay = () => this.setState(state => ({
        weekDisplay: 'none',
        inputDisplay: 'none',
        settingsDisplay: 'block',
        aboutDisplay: 'none',
    }));
    setAboutDisplay = () => this.setState(state => ({
        weekDisplay: 'none',
        inputDisplay: 'none',
        settingsDisplay: 'none',
        aboutDisplay: 'block',
    }));

    render() {
        return (
            <View style={styles.container}>
                <View style={{display: this.state.weekDisplay}}>
                    <View style={styles.contentContainer}>
                        <WeekScreen/>
                    </View>
                </View>

                <View style={{display: this.state.inputDisplay}}>
                    <View style={styles.contentContainer}>
                        <InputScreen/>
                    </View>
                </View>

                <View style={{display: this.state.settingsDisplay}}>
                    <View style={styles.contentContainer}>
                        <SettingsScreen/>
                    </View>
                </View>
                
                <View style={{display: this.state.aboutDisplay}}>
                    <View style={styles.contentContainer}>
                        <AboutScreen/>
                    </View>
                </View>

                <View style={styles.navBar}>
                    <TouchableOpacity
                        onPress={this.setWeekDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 20}} source={require('../images/Icons/homeIcon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.setInputDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 23.4}} source={require('../images/Icons/checkBoxIcon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.setSettingsDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 20}} source={require('../images/Icons/settingsIcon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.setAboutDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 20}} source={require('../images/Icons/aboutIcon.png')}/>
                        </View>
                    </TouchableOpacity>
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

  navBar: {
    flexDirection: 'row',
    height: deviceHeight/11*0.75,
    width: deviceWidth,
    backgroundColor: '#fec20f',
    borderTopWidth: 2,
  },
  navBarButton: {
    height: deviceHeight/11*0.75,
    width: deviceWidth/4,
    alignItems: 'center',
    justifyContent: 'center',

  },
});