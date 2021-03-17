import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity ,SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


import firebase from "./firebase";




export const CardItem = ({ info }) => {
    return (
   
        <TouchableOpacity activeOpacity={0.7} onLongPress={() => press(console.log('press'))}>

            <SafeAreaView style={styles.cardContainer} >
                <View style={styles.cardBody}>
                <Text style={styles.tag}>{info.id}</Text>
                <Text style={styles.cardBody}>{info.name}</Text>
                <Text style={styles.cardTime}>{info.email}</Text>
                <Text style={styles.cardAddress}>{info.phone}</Text>
                </View>
            </ SafeAreaView >

        </TouchableOpacity>
       
    );
};





const ItemScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
      
    <ScrollView>
      
      {users.map((user) => { 
        return (
          <View  style={{ flex: 1 }}
            key={user.id}
           
       
          >
           
           <CardItem

                    info={{
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone
                        

                    }}
                />
           
          </View>



        );
      })}
    </ScrollView>
  );
};

export default ItemScreen;




const styles = StyleSheet.create({
    item: {
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
        // backgroundColor: '#d3d3d3'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,

        marginHorizontal: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginBottom: 5,
        padding: 5,
        fontSize: 28,
    },
    tag: {
        color: '#708090',
    },
    cardContainer: {
        padding: 15,
        paddingBottom: 0,
    },
    margin: {
        height: 1,
        backgroundColor: '#F0F1F2',
        width: '100%',
        marginVertical: 10,
    },
    cardBodyBottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: '#708090',
    },
    cardBottomTitle: {
        fontSize: 7.5,
        marginTop: 5,
        textAlign: 'center',
        color: '#708090',
    },
    cardGroupIcon: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'center',
        textAlign: 'left',
        color: '#708090',

    },

    iconMore: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    iconLike: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cardBody: {
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardBodyTop: {
        flexDirection: 'row',
    },
    cardLeftSide: {
        paddingHorizontal: 10,
        flex: 1,
    },
    cardName: {
        color: '#2f4f4f',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTime: {
        color: '#708090',
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5,
    },
    cardAddress: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 5,
    },
    cardAvatar: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    cardHeaderContaner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#708090',
    },
    cardMore: {
        fontWeight: 'bold',
        color: '#708090',
    },
    faceGroup: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceContainer: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    faceText: {
        fontSize: 16,
        marginTop: 6,
    },

    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 15,
        paddingHorizontal: 50,
        marginTop: 15,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#708090',
    },
    desc: {
        fontSize: 20,
        fontWeight: '400',
        color: '#708090',
        marginTop: 5,
    },
    buttonBooks: {
        flexDirection: 'row',
        marginTop: 20,
    },
    btnGradient: {
        padding: 10,
        borderRadius: 40,
    },
    btnBookText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    }





});

