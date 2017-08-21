/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Settings extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {
      title: 'Settings',
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
          <Text>
            This is the Settings component. Click the Logout button to return to the Login screen.
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.actions.logout()}>
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
              LOGOUT
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
    padding: 8
  }
});

export default connect(state => ({state: state.authenticate}), (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
}))(Settings);
