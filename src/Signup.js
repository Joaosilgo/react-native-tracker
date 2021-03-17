
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';


export default class SignupScreen extends Component {

   

   

         SignupScreen  = ({ navigation }) => {   
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  title="Go to Login"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            );
          }

          render() {

            return(
                <SignupScreen/>
            )
          }
}

const styles = StyleSheet.create({

});