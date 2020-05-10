import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={{ height: deviceHeight / 11, width: deviceWidth / 3, justifyContent: 'center', paddingLeft: 15 }}>
            <Image style={{ height: 30, width: 30 }} source={require('../images/Icons/hamburgerMenuIcon.png')} />
          </View>
          <View style={{ height: deviceHeight / 11, width: deviceWidth / 3 * 2, justifyContent: 'center' }}>
            <Text style={styles.title}>
              Calendar
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <CalendarList
              markingType={'multi-dot'}
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={1}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={3}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={false}
            />
            <Agenda
              // The list of items that have to be displayed in agenda. If you want to render item as empty date
              // the value of date key has to be an empty array []. If there exists no value for date key it is
              // considered that the date in question is not yet loaded
              items={{
                '2020-03-10': [{ name: 'item 1 - any js object' }],
                '2020-03-11': [{ name: 'item 2 - any js object', height: 80 }],
                '2020-03-12': [],
                '2020-03-13': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
              }}
              style={{ height: deviceHeight/3, width: deviceWidth, borderWidth: 1 }}
            />
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
    paddingLeft: 20,
  },

  contentContainer: {
    height: deviceHeight / 11 * 9.25,
    width: deviceWidth,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
