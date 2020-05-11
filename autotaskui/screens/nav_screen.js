import React from 'react';
import { StyleSheet,
         View,
         Image,
         TouchableOpacity,
         Dimensions } from 'react-native';

import { CalendarScreen } from '../pages/calendar_screen.js'
import { WeekScreen } from '../pages/week_screen.js';
import { InputScreen } from '../pages/input_screen.js';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let calendarDisplay = 'none';
let weekDisplay = 'none';
let inputDisplay = 'none';
let settingsDisplay = 'none';

function setCalendarDisplay(){
    calendarDisplay = 'block';
    weekDisplay = 'none';
    inputDisplay = 'none';
}
function setWeekDisplay(){
    calendarDisplay = 'none';
    weekDisplay = 'block';
    inputDisplay= 'none';
}
function setInputDisplay(){
    calendarDisplay = 'none';
    weekDisplay = 'none';
    inputDisplay = 'block';
}

export {calendarDisplay, weekDisplay, inputDisplay, settingsDisplay};
export {setCalendarDisplay, setWeekDisplay, setInputDisplay}


export class NavScreen extends React.Component {
    state = {
        calendarDisplay: 'none',
        weekDisplay: 'none',
        inputDisplay: 'block',
        settingsDisplay: 'none',
    };
      
    setCalendarDisplay = () => this.setState(state => ({
        calendarDisplay: 'block',
        weekDisplay: 'none',
        inputDisplay: 'none',
    }));
    setWeekDisplay = () => this.setState(state => ({
        calendarDisplay: 'none',
        weekDisplay: 'block',
        inputDisplay: 'none',
    }));
      setInputDisplay = () => this.setState(state => ({
        calendarDisplay: 'none',
        weekDisplay: 'none',
        inputDisplay: 'block',
    }));

    render() {
        return (
            <View style={styles.container}>
                <View style={{display: this.state.calendarDisplay}}>
                    <View style={styles.contentContainer}>
                        <CalendarScreen/>
                    </View>
                </View>
                
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
                
                <View style={styles.navBar}>
                    <TouchableOpacity
                        onPress={setCalendarDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 20}} source={require('../images/Icons/calendarIcon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={setWeekDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 20}} source={require('../images/Icons/homeIcon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={setInputDisplay}
                    >
                        <View style={styles.navBarButton}>
                            <Image style={{height: 20, width: 23.4}} source={require('../images/Icons/checkBoxIcon.png')}/>
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
    width: deviceWidth/3,
    alignItems: 'center',
    justifyContent: 'center',

  },
});