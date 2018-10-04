/**
 * Author : Ayyappan Murugesan
 * Company: SmartSource Softwares Pvt Ltd
 * Email  : ayyappan@smartsource.com.sg
 * Phone  : Call: 7010774329 Whatsapp: 8870483557 
 */

import React, { Component } from 'react';
import {Text} from 'react-native';


export default class MyText extends Component {
  render() {
    let { color , text } = this.props;
    return (
        <Text style={{fontSize: 20,textAlign:'center',color: color}}>
          {text}
        </Text>
      
    );
  }
}



