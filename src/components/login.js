/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

class Login extends Component {

  static navigationOptions = ({navigation}) => {
    const {
      params = {}
    } = navigation.state;
    return {title: 'Login', header: null}
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hideLogo: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2c3e50' barStyle='light-content'/>{this.state.hideLogo
          ? (
            <View style={{
              backgroundColor: '#eeeeee',
              padding: 8
            }}>
              <Text style={{
                color: '#2c3e50',
                fontSize: 24,
                fontWeight: 'bold'
              }}>
                Title
              </Text>
            </View>
          )
          : (
            <View style={{
              flex: 1,
              backgroundColor: '#2c3e50',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#ffffff',
                fontSize: 48,
                fontWeight: 'bold'
              }}>
                Title
              </Text>
            </View>
          )}

        <View style={{
          flex: 1,
          padding: 8,
          backgroundColor: '#eeeeee'
        }}>
          <TextInput ref='usernameInput' style={{
            height: 40
          }} onFocus={() => this.setState({hideLogo: true})} onChangeText={(username) => this.setState({username})} value={this.state.username} placeholder='Username' autoCapitalize='none' autoCorrect={false} returnKeyType='next' onSubmitEditing={() => this.refs.passwordInput.focus()}/>

          <TextInput ref='passwordInput' style={{
            height: 40
          }} onFocus={() => this.setState({hideLogo: true})} onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} returnKeyType='done' onSubmitEditing={() => this.setState({hideLogo: false})}/>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.actions.login(this.state.username, this.state.password)}>
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
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{
            margin: 8
          }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={{
              textAlign: 'center'
            }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Register')}>
            <View style={{
              height: 48,
              borderRadius: 24,
              backgroundColor: '#bdc3c7',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#ffffff',
                fontWeight: 'bold'
              }}>
                REGISTER
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(state => ({state: state.authenticate}), (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
}))(Login);
