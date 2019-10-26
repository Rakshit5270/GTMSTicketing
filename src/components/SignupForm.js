import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import axios from 'axios'
// import { Actions } from 'react-native-router-flux'

export default class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.userSignup = this.userSignup.bind(this)
    }

    userSignup() {
        // axios.post('http://192.168.1.104:8080/spring-boot-jwt-1.0-SNAPSHOT/token/SIGNUP')
        //     .then(response => this.setState({username: response.data.name, password: response.data.password}))
        //  alert("success1")

        // fetch('https://www.reddit.com/r/reactjs.json')
        //     .then((result) => {
        //         // Get the result
        //         // If we want text, call result.text()
        //         return result.json();
        //     }).then((jsonResult) => {
        //         // Do something with the result
        //         console.log(jsonResult);
        //         console.log("Hello");
        //     }).catch((error) => {
        //         console.error(error);
        //       });
    }


    // state = {
    //     username: '',
    //     password: ''
    // }
    render() {
        // const userSignup = () => {
        //     // Actions.login();

        //     // if validation fails, value will be null
        //         fetch("http://192.168.1.104:8080/spring-boot-jwt-1.0-SNAPSHOT/token/SIGNUP", {
        //             method: "POST",
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 username: this.state.username,
        //                 password: this.state.password
        //             })
        //         })
        //             .then((response) => response.text())
        //             .then((responseData) => {
        //                 this._onValueChange(STORAGE_KEY, responseData.id_token),
        //                     AlertIOS.alert(
        //                         "Signup Success!",
        //                         "Click the button to get a Chuck Norris quote!"
        //                     )
        //             })
        //             .done();

        //     // alert("hello")
        // }
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/email.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={TextInputValue => this.setState({ username: TextInputValue })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/key.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={TextInputValue => this.setState({ password: TextInputValue })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/edit.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="First Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(firstName) => this.setState({ firstName })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/edit.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Last Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(lastName) => this.setState({ lastName })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/age.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Age"
                        underlineColorAndroid='transparent'
                        onChangeText={(age) => this.setState({ age })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/google-mobile.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Contact"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(contact) => this.setState({ contact })} />
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.userSignup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>

                {/* <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.userSignup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity> */}
                {/* <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={userSignup}> */}
                {/* <Text style={styles.loginText}>{this.props.type}</Text>  */}
                {/* </TouchableOpacity> */}
            </View>
        )
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 9,
        borderBottomWidth: 1,
        width: 300,
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 35,
        height: 35,
        marginLeft: 10,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnForgotPassword: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 10,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: "#00b5ec",
        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },

    btnText: {
        color: "white",
        fontWeight: 'bold'
    },
}); 