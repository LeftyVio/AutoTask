import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         Dimensions,
         ScrollView,
         Switch } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class InputScreen extends React.Component {
    state = {
        selected: undefined,
        switchValue: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={{height: deviceHeight/11, width: deviceWidth/3, justifyContent: 'center', paddingLeft: 15}}>
                        <Image style={{height: 30, width: 30}} source={require('../images/Icons/hamburgerMenuIcon.png')}/>
                    </View>
                    <View style={{height: deviceHeight/11, width: deviceWidth/3*2, justifyContent: 'center'}}>
                        <Text style={styles.title}>
                            New Task
                        </Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.optionContainer}>
                            <Text style={styles.optionTitle}>
                                Type
                            </Text>
                        </View>
                        <View style={styles.optionInputContainer}>
                            <View style={styles.optionInput}>
                                <Text style={styles.optionInputText}>
                                test
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.optionContainer}>
                            <Text style={styles.optionTitle}>
                                Name
                            </Text>
                        </View>
                        <View style={styles.optionInputContainer}>
                            <View style={styles.optionInput}>
                                <Text style={styles.optionInputText}>
                                test
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.optionContainer}>
                            <Text style={styles.optionTitle}>
                                Due Date
                            </Text>
                        </View>
                        <View style={styles.optionInputContainer}>
                            <View style={styles.optionInput}>
                                <Text style={styles.optionInputText}>
                                test
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Switch
                        value={this.state.switchValue}
                        onValueChange ={(switchValue)=>this.setState({switchValue})}
                    />
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
        height: deviceHeight/11*10.25,
        width: deviceWidth,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    optionContainer: {
        flexDirection: 'row',
        height: 84,
        width: deviceWidth/3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingBottom: 15,
    },
    optionTitle: {
        fontSize: 20,
    },
    optionInputContainer: {
        height: 84,
        width: deviceWidth/3*2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 10,
    },
    optionInput: {
        height: 40,
        width: deviceWidth/7*4,
        backgroundColor: '#c7c7c7',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 3,
    },
    optionInputText: {
        fontSize: 17,
        color: '#979797',
    },
});
