import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

export default class Logo extends Component{
    render() {
        return(
            <View style={styles.container}>
               <Image style={styles.logo} source={{ uri: 'https://assets.laliga.com/assets/logos/laliga-v-negativo/laliga-v-negativo-300x300.png' }} />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
   
    logo: {
      width: 120,
      height: 160,
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 50,
    }
  });  