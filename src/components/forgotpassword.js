/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ForgotPassword extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {
      title: 'Forgot Password',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#34495e'
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          paddingVertical: 16
        }}>
          <Text>This is the ForgotPassword component. Place account recovery instructions here.</Text>
        </View>

        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
          <View style={{
            height: 48,
            borderRadius: 24,
            backgroundColor: '#16a085',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: '#ffffff',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#eeeeee'
  }
});

export default ForgotPassword;
