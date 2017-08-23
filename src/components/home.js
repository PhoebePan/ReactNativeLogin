/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Home",
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#34495e'
    },
    headerRight: <TouchableOpacity style={{
        margin: 8
      }} onPress={() => navigation.navigate('Settings')}>
        <Text style={{
          textAlign: 'center',
          color: '#ffffff'
        }}>
          Settings
        </Text>
      </TouchableOpacity>
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2c3e50' barStyle='light-content'/>
        <Text>
          This is the Home component. You can add your main functions here.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fafafa'
  }
});

export default Home;
