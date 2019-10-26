import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux'

const Login = () => {

    const goToSignup = () => {
       Actions.signup()
    //    alert("hello")
    }
    return (
        <View style={styles.container}>
        {/* <Image style={styles.bgImage} source={{ uri: "https://in.pinterest.com/pin/785948572450028721/"}}/> */}
        <Image style={styles.bgImage} source={{ uri: "https://i.pinimg.com/564x/cf/57/ad/cf57ade9dc05103d2c4c530f4c288fd5.jpg" }} />
         <Logo/>
            <Form type="Login"/>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>                    
                <TouchableOpacity onPress={goToSignup}><Text style={styles.signupButton}>SignUp</Text></TouchableOpacity>
            </View>
        </View>
      
    )
 }
 export default Login


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signupTextCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection:'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color: '#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      },
  })