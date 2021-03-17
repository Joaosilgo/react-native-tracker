import * as React from 'react';
import { Button, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './login';
//import SignupScreen from './Signup';


function SignupScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }
  

  /*
  function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    );
  }
  */


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        
        options={{
          headerShown: false,
          headerTintColor: 'white',
          headerTitle: 'MooTracker',
          headerStyle: { backgroundColor: '#2f4f4f' },
          headerTitleStyle: { fontWeight: 'normal' }
        }}

        
      />       
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
      />
     
    </Stack.Navigator>
  );
}



export default function Authentication() {
    return (
    
  
        <MyStack />
    
      
    );
  }


