import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Button, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ActivityIndicator, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase';
const { height } = Dimensions.get('window');
import Block from '../src/components/Block';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }



  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      /* 
     this.setState({
       isLoading: true,
     })
     
*/

      firebase.
        auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '',
            password: ''
          })


          console.log('Login Sucessefull 🍪')
          this.props.navigation.navigate('Map')
        })

        .catch(function (error) {


          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });



    }
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }

    return (

      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "white"        }}
        keyboardVerticalOffset={height * 0} >

        {/*  <Block center middle> 
          <Block center middle>
            <Ionicons name="ios-finger-print" color="gray" />

          </Block>
*/}



        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <Block flex={2.5} center> */}
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>

              <Text style={styles.logoText}>Sign In</Text>

              <Text style={styles.info}>Please enter your credentials to proceed.</Text>
              {/*   <Block center style={{ marginTop: 44 }}> */}

              <TextInput placeholder="Email..." placeholderColor="#c4c3cb" style={styles.loginFormTextInput} value={this.state.email.trim().toLowerCase()} onChangeText={(val) => this.updateInputVal(val.trim().toLowerCase(), 'email')} />
              <Text style={styles.right}>Forgot password?</Text>
              <TextInput placeholder="Password..." placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} value={this.state.password.trim()} onChangeText={(val) => this.updateInputVal(val.trim(), 'password')} />
              <View style={styles.btnContainer}>
                <Button

                  style={styles.loginButton}
                  onPress={() => this.userLogin()}
                  title="Login"

                >
                  <Ionicons name="ios-finger-print" color="gray" />
                </Button>



              </View>
              {/*    </Block> */}

              <Text style={styles.info} >
                Don't have an account? <Text
                  height={18}
                  color="blue">
                  Sign up
                </Text>
              </Text>


            </View>
          </View>


          {/*  </Block> */}
        </TouchableWithoutFeedback>

        {/*    </Block> */}
      </KeyboardAvoidingView>


    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
}
