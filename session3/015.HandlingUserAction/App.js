/**
 * Author : Ayyappan Murugesan
 * Company: SmartSource Softwares Pvt Ltd
 * Email  : ayyappan@smartsource.com.sg
 * Phone  : Call: 7010774329 Whatsapp: 8870483557 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback,
  Platform
} from 'react-native';


export default class App extends Component {

  button2Press() {
   
        Alert.alert('You tapped the button2!');
            
  }
  button3Press() {
   
        Alert.alert('You tapped the button2!');
            
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (

        <View >
            
            <Button
              onPress={() => {
                Alert.alert('You tapped the button1!');
              }}
              title="Button1"
            />
            

            <Button
              onPress={()=>{this.button2Press()}}
              title="Button2"
            />
            
             <Button
              onPress={this.button3Press.bind(this)}
              title="Button3"
            />

             <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>

            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>


            <TouchableWithoutFeedback
                onPress={this._onPressButton}
                >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>


            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>

        </View>

      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginTop:30,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

