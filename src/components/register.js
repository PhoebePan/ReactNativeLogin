/* @flow */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import * as COLOR from '../config/colors';

class Register extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {
      title: 'Create Account',
      headerTintColor: COLOR.HEADER_TINT,
      headerStyle: {
        backgroundColor: COLOR.HEADER
      }
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        padding: 8,
        backgroundColor: COLOR.BACKGROUND
      }}>
        <View style={{
          paddingVertical: 16
        }}>
          <Text>This is the Register component. Place account registration form here.</Text>
        </View>

        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
          <View style={{
            height: 48,
            borderRadius: 24,
            backgroundColor: COLOR.TINT,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: COLOR.BUTTON_TEXT,
              fontWeight: 'bold'
            }}>
              NEXT
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Register;
