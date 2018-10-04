/**
 * Author : Ayyappan Murugesan
 * Company: SmartSource Softwares Pvt Ltd
 * Email  : ayyappan@smartsource.com.sg
 * Phone  : Call: 7010774329 Whatsapp: 8870483557 
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import MyText from './MyText';
import CustomText from './CustomText';

export default class App extends Component {
  render() {
    return (
       <View>

          <MyText color={'red'} text={'HI'} />

          <MyText color={'green'} text={'Hello'} />

          <CustomText
            buttonStyles={{backgroundColor:'blue',height:50}}
            textStyles={{color:'white',margin:10}}>
              This is some custom text
          </CustomText>

        </View>      
    );
  }
}



