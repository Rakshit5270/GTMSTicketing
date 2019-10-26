import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

// import Logo from '../components/Logo';
// import Form from '../components/Form';
import { Actions } from 'react-native-router-flux'

const Home = () => {
    const goToLogin = () => {
        Actions.login()
     }
    return (
        <View style={styles.container}>

           <TouchableOpacity onPress={goToLogin}><Text style={styles.signupButton}>Welcome to Home Page</Text></TouchableOpacity>
         {/* <Logo/>
            <Form type="Login"/>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>                    
                <TouchableOpacity onPress={goToLogin}><Text style={styles.signupButton}>SignUp</Text></TouchableOpacity>
            </View> */}
        </View>
      
    )
 }
 export default Home

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