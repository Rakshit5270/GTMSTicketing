import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import { Actions } from 'react-native-router-flux'

const Signup = () => {
    const goToLogin = () => {
       Actions.login()
    }

    const userSignup = () => {
        // Actions.login();
        alert("hello")
     }

    return (
        <View style={styles.container}>
                <Logo/>
                <SignupForm type="Signup"/>   
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={goToLogin}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View>
             </View>
       
    )
 }
 export default Signup


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#455a64',
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
    }
  })