import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         Dimensions,
         ScrollView } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class WeekScreen extends React.Component {
    state = {
        week: [
            {
                name: "Sunday",
                work: 'true',
                deadline: 'true',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Monday",
                work: 'true',
                deadline: 'false',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Tuesday",
                work: 'true',
                deadline: 'false',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Wednesday",
                work: 'true',
                deadline: 'true',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Thursday",
                work: 'true',
                deadline: 'true',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Friday",
                work: 'false',
                deadline: 'true',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
            {
                name: "Saturday",
                work: 'false',
                deadline: 'false',
                workTime1: '6:30 PM',
                workTime2: '7:30 PM',
                deadlineTime: '11:59 PM',
                workType: 'Exercise',
                deadlineType: 'ENGLISH PAPER'
            },
          ],
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={{height: deviceHeight/11, width: deviceWidth/3, justifyContent: 'center', paddingLeft: 15}}>
                        <Image style={{height: 30, width: 30}} source={require('../images/Icons/hamburgerMenuIcon.png')}/>
                    </View>
                    <View style={{height: deviceHeight/11, width: deviceWidth/3*2, justifyContent: 'center'}}>
                        <Text style={styles.sub}>
                        Jan
                        </Text>
                        <Text style={styles.title}>
                        12-18
                        </Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView>
                        {this.state.week.map((day) => (
                            <View>
                                <View style ={{flexDirection: 'row', marginTop: 15,}}>
                                    <View style={styles.dayTitle}>
                                        <Text style={styles.dayText}>
                                            {day.name}
                                        </Text>
                                    </View>
                                
                                    <View style={styles.boxes}>
                                        <View style={styles.yellow}/>
                                        <View style={styles.red}/>
                                    </View>
                                </View>
                            
                            
                                <View style={styles.work}>
                                    <View style={styles.times}>
                                        <Text style={styles.yellowText}>
                                        {day.workTime1}
                                        </Text>
                                        <Text style={styles.yellowText}>
                                        |
                                        </Text>
                                        <Text style={styles.yellowText}>
                                        {day.workTime2}
                                        </Text>
                                    </View>
                                    
                                    <View style={styles.wTask}>
                                    <Text style={{fontSize: 15}}>
                                        {day.workType}
                                        </Text>
                                    </View>
                                </View>
                            
                                <View style={styles.deadline}>
                                    <View style={styles.times}>
                                        <Text style={styles.redText}>
                                        {day.deadlineTime}
                                        </Text>
                                    </View>
                                    <View style={styles.dTask}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
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
    backgroundColor: '#292929',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    height: deviceHeight/11,
    width: deviceWidth,
    backgroundColor: '#1c1f4c',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,
  },

  contentContainer: {
    height: deviceHeight/11*9.25,
    width: deviceWidth,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});


