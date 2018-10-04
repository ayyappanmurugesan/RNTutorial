/**
 * Author : Ayyappan Murugesan
 * Company: SmartSource Softwares Pvt Ltd
 * Email  : ayyappan@smartsource.com.sg
 * Phone  : Call: 7010774329 Whatsapp: 8870483557 
 */

import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Button,
  Text
} from 'react-native';



const window = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state={

        visible: false,
         names: [
        { id: 1, name: 'Ayyappan'},
        { id: 2, name: 'Adhiruran'},
        { id: 3, name: 'Murugan'},
        { id: 4, name: 'KuppuSamy'}
      ]

    };

  }

  toggle() {

    this.setState({
      visible: !this.state.visible
     
    })
  }

 
  render() {
    return (

        <View style={{width:window.width,height:window.height,backgroundColor: 'red'}}>

           
              <Button
                  onPress={this.toggle.bind(this)}
                  title={this.state.visible==true?'Hide':'Show'}
              />

              {

                this.state.visible==true ? (

                      <View style={{width:window.width,height:100,backgroundColor: 'green'}}>

                        {

                          this.state.names.map((data)=>{
                            return (
                              <Text key={data.id} style={{color:'white'}}>{data.name}</Text>
                            )
                          })
                        }

                    </View>

                ) : null
              }

            


        </View>

      
    );
  }
}



