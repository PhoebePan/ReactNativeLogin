/* @flow */

import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

import * as COLOR from '../config/colors';

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

  renderLogo = () => {
    if (this.state.hideLogo) {
      return (
        <View style={{
          backgroundColor: COLOR.BACKGROUND,
          padding: 8,
          marginTop:8
        }}>
          <Text style={{
            color: COLOR.PRIMARY,
            fontSize: 24,
            fontWeight: 'bold'
          }}>
            {`Title`}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{
          flex: 0.75,
          backgroundColor: COLOR.PRIMARY,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: COLOR.PRIMARY_TEXT_LIGHT,
            fontSize: 48,
            fontWeight: 'bold'
          }}>
            {`Title`}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View>
          <StatusBar backgroundColor={COLOR.STATUS_BAR} barStyle='light-content'/>
        </View>

        {this.renderLogo()}

        <View style={{
          flex: 1,
          padding: 8,
          backgroundColor: COLOR.BACKGROUND
        }}>

          <View style={{
            backgroundColor: COLOR.INPUT_TEXT_BACKGROUND,
            marginBottom: 8,
            flexDirection: 'row'
          }}>

            <View style={{width:40,backgroundColor:COLOR.TINT_DARK, justifyContent:'center',alignItems:'center'}}>
              <Icon name="account" size={21} color={COLOR.ICON} />
            </View>

            <TextInput ref='usernameInput' underlineColorAndroid={COLOR.TRANSPARENT} style={{
              padding: 8,
              height: 40,
              flex: 1
            }} onFocus={() => this.setState({hideLogo: true})} onChangeText={(username) => this.setState({username})} value={this.state.username} placeholder='Username' autoCapitalize='none' autoCorrect={false} returnKeyType='next' onSubmitEditing={() => this.refs.passwordInput.focus()}/>
          </View>

          <View style={{
            backgroundColor: COLOR.INPUT_TEXT_BACKGROUND,
            marginBottom: 8,
            flexDirection: 'row'
          }}>

            <View style={{width:40,backgroundColor:COLOR.TINT_DARK, justifyContent:'center',alignItems:'center'}}>
              <Icon name="lock" size={21} color={COLOR.ICON} />
              </View>

            <TextInput ref='passwordInput' underlineColorAndroid={COLOR.TRANSPARENT} style={{
              padding: 8,
              height: 40,
              flex: 1
            }} onFocus={() => this.setState({hideLogo: true})} onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} returnKeyType='done' onSubmitEditing={() => {
              this.setState({hideLogo: false})
            }}/>
          </View>

          <TouchableOpacity style={{marginBottom:16}} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={{
              textDecorationLine: 'underline'
            }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.actions.login(this.state.username, this.state.password)}>
              <View style={{
                height: 48,
                backgroundColor: COLOR.TINT,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  color: COLOR.BUTTON_TEXT,
                  fontWeight: 'bold'
                }}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity style={{marginVertical:16}} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{
              textAlign:'center',
              textDecorationLine: 'underline',
              fontSize:16
            }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default connect(state => ({state: state.authenticate}), (dispatch) => ({
  actions: bindActionCreators(authActions, dispatch)
}))(Login);
