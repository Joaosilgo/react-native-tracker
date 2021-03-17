const React = require("react-native");

const { StyleSheet } = React;
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 25, 
  color: '#2f4f4f',

  fontWeight: "100",
  marginTop: 50,
  marginBottom: 5,
  textAlign: 'center',
},
info: {
  fontSize: 10, 
  color: 'gray',

  fontWeight: "100",
  marginTop: 5,
  marginBottom: 5,
  textAlign: 'center',
},
right: {
  fontSize: 10, 
  color: 'gray',

  fontWeight: "100",
  marginTop: 10,
  marginBottom: 10,
  textAlign: 'right',
  marginRight: 30
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 10,
  borderRadius: 2,
  borderWidth: 0.5,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {

  flex: 1,
  height: 25,
  margin: 5,
    marginRight: 5,
  marginTop: 10,
  borderRadius: 4,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 50,
},
preloader: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2f4f4f'

},
btnContainer: {
 marginTop: 12
}
};