/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Home extends Component {

  static navigationOptions = ({navigation}) => ({title: "Home", headerRight: <Button title="Settings" onPress={() => navigation.navigate('Settings')}/>});

  render() {
    return (
      <View style={styles.container}>
        <Text>{`Welcome ${this.props.state.authUser} !`}</Text>
        <Text>
          This is the Home component.
        </Text>
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
}))(Home);
