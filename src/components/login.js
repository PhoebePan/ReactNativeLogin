/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Login extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {title: 'Login'}
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={{
          height: 40
        }} onChangeText={(username) => this.setState({username})} value={this.state.username} placeholder='username' autoCapitalize='none' autoCorrect={false}/>

        <TextInput style={{
          height: 40
        }} onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true}/>

        <Button title='Login' onPress={() => this.props.actions.login(this.state.username, this.state.password)}/>

        <TouchableOpacity style={{
          margin: 8
        }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={{
            textAlign: 'center'
          }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Button title='Register' onPress={() => this.props.navigation.navigate('Register')}/>

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
}))(Login);
