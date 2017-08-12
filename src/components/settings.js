/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Settings extends Component {

  static navigationOptions = {
    title: 'Settings'
  };

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
        <Button title='Logout' onPress={this.props.actions.logout}/>
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
