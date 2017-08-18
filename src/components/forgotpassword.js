/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ForgotPassword extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {title: 'Forgot Password'}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the ForgotPassword component. Add content for resetting password.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  }
});

export default ForgotPassword;
