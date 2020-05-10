import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableHighlight, TextInput, Button, Alert } from 'react-native';

import { Google } from "expo";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export class LoginScreen extends React.Component {
    state = {
        logUser: 'Username or email',
        logPass: '',
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    _handleButtonPress = () => {
        Alert.alert(
            'Button pressed!',
            'You did it!',
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={styles.title}>
                        AutoTask
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.text1}>
                        Log in
                    </Text>
                    <TextInput style={styles.inputBars}
                        onChangeText={(logUser) => this.setState({ logUser })}
                        value={this.state.logUser}
                    />
                    <TextInput style={styles.inputBars}
                        onChangeText={(logPass) => this.setState({ logPass })}
                        value={this.state.logPass}
                        secureTextEntry={true}
                    />
                    <View>
                        <Button style={styles.buttons}
                            title="Log in"
                            onPress={this.logIn}
                        />
                    </View>

                    <View style={styles.googleContain}>
                        <Image
                            source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' }}
                            style={styles.googleLogo}
                        />
                        <Button style={styles.buttons}
                            title="Login with Google"
                            onPress={this._handleGoogleLogin}
                        />
                    </View>

                    <Text style={styles.text2}>
                        Haven't got an account?
                    </Text>

                    <TouchableHighlight
                        onPress={() => {
                            alert('You have signed up!')
                        }}
                    >
                        <Text style={styles.signUpText}>
                            Sign Up
                        </Text>
                    </TouchableHighlight>
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
        flex: 3,
        backgroundColor: '#1c1f4c',
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 30,
    },

    contentContainer: {
        flex: 18,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 16,
        margin: 10,
    },
    text2: {
        fontSize: 16,
        margin: 5,
    },
    inputBars: {
        width: 3 * (deviceWidth / 4),
        height: 25,
        borderWidth: 1,
        margin: 10,
        borderRadius: 7,
    },
    googleContain: {
        width: 2 * (deviceWidth / 3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        broderRadius: 10,
    },
    buttons: {
        width: 1.75 * (deviceWidth / 3),
        height: 25,
        margin: 10,
        borderRadius: 5,
    },
    googleLogo: {
        height: 25,
        width: 25,
        margin: 5,
    },
    signUpText: {
        fontSize: 16,
        margin: 2,
        color: 'blue',
    },
});

