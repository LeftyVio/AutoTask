import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         Dimensions,
         ScrollView,
         Picker,
         Switch } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class InputScreen extends React.Component {
    state = {
        selected: undefined,
        switchValue: false,
        inputText1: "",
        inputText2: "",
        inputText3: "",
        inputText4: "",
        priorityNum: "",
        itemValue: "",
        itemIndex: "",
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
                                <TextInput
                                    style={styles.optionInputText}
                                    onChangeText={(inputText1) => this.setState({inputText1})}
                                    placeholder="Enter assignment type"
                                    value ={this.state.inputText1}
                                />
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
                                <TextInput
                                    style={styles.optionInputText}
                                    onChangeText={(inputText2) => this.setState({inputText2})}
                                    placeholder="Enter name of assignment"
                                    value ={this.state.inputText2}
                                />
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
                                <TextInput
                                    style={styles.optionInputText}
                                    onChangeText={(inputText3) => this.setState({inputText3})}
                                    placeholder="Enter due date"
                                    value ={this.state.inputText3}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.optionContainer}>
                            <Text style={styles.optionTitle}>
                                Priority
                            </Text>
                        </View>
                        <View style={styles.optionInputContainer}>
                            <View style={styles.optionInput}>
                                <Picker
                                    selectedValue={this.state.priorityNum}
                                    style={styles.optionInput}
                                    onValueChange={(itemValue, itemIndex) => this.setState({itemValue})}
                                >
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                </Picker>
                            </View>
                        </View>
                    </View>
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
    dropdownMenu: {
        flexDirection: 'row',
        height: 80,
        width: 120,
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
        borderWidth: 1,
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
