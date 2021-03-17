import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview, Polygon } from 'react-native-maps';
import { firebase, firestore, storage } from "./firebase";



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/login';
import Authentication from './src/Authentication';

import ItemList from "./ItemList";





var markers = [
  {
    latitude: 38.5442558,
    longitude: -8.8782881,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

// declare this outside of render
var region = {
  latitude: 38.5442558,
  longitude: -8.8782881,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};



var mapStyle = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]








function HomeScreen() {
  return (


    <Authentication />





  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>

      <MapView
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        annotations={markers}
      >


        <Marker
          coordinate={{ latitude: 38.5442558, longitude: -8.8782881 }}
          key="1"
          title="Cow Mimosa"
          description="moo moo"
          pinColor="yellow"
          onPress={() => console.log('Moo.. Mooo..!')}
        >


          <MaterialCommunityIcons name="pin" color="gray" size={24} />

        </Marker>
      </MapView>
      {/*   
     initialRegion={region}   */}


    </View>

  );
}





function ManagerScreen() {

  return (
    <View style={styles.container}>

<ItemList/>

    </View>

  );
}






const Tab = createBottomTabNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'shield-home'
                : 'shield-home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            }
            else if (route.name === 'Manager') {
              iconName = focused ? 'cow' : 'cow';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2F4F4F',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={SettingsScreen} />
        <Tab.Screen name="Manager" component={ManagerScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }

});
