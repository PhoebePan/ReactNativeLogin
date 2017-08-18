/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Register extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {title: 'Register'}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is the Register component. Place account registration form here.</Text>
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

export default Register;
