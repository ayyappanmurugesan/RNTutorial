/**
 * Author : Ayyappan Murugesan
 * Company: SmartSource Softwares Pvt Ltd
 * Email  : ayyappan@smartsource.com.sg
 * Phone  : Call: 7010774329 Whatsapp: 8870483557 
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

const window = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (

        <View>
            
            <Text style={styles.bigblue}>
              Hi
            </Text>

             
            <Text style={styles.red}>
              Hi
            </Text>

            <View style={styles.div1}>

            </View>

            <View style={styles.div2}>

                <Text style={{color:'white',textAlign:'center'}}>{window.width+' x '+window.height}</Text>

            </View>

        </View>

      
    );
  }
}



const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    padding: 20
  },
  red: {
    color: 'red',
    textAlign:'center',
    padding: 10
  },
  div1: {
    width: 50,
    backgroundColor:'red',
    height: 30
  },
  div2: {
    marginTop: 10,
    width: window.width,
    height: 50,
    backgroundColor: 'red'
  }
});