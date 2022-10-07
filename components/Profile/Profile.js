/* eslint-disable prettier/prettier */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const Profile = ({navigation}) => {
    return (
        <View style={{margin:30}}>
             <Icon name="arrow-back"  size={30}  onPress={() => {
        navigation.navigate('Statistic')}}/>
        <View style={styles.container}>
            
            <Text style={styles.headerText}>Profile</Text>
        </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {

        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        height:'100%'
    },
   
    headerText: {
        fontSize:25,
        lineHeight:30,
        fontWeight: 'bold',
        color: 'black',
        marginTop:10
      },
   
  });


// define your styles

//make this component available to the app
export default Profile;
