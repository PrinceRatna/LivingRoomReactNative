/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BarGraph from '../BarGraph/BarGraph';
import SingleButton from '../SingleButton/SingleButton';

let buttonData=[
    {
        id:1,
        title: "Week"
    },

    {
        id:2,
        title: "Month"
    },

    {
        id:3,
        title: "Year"
    }
];
// create a component
const ButtonScreen = () => {
  return (
    <View style={styles.container}>
    {
        buttonData.map((data)=><SingleButton key={data.id} title={data.title}/>)
    }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});
//make this component available to the app
export default ButtonScreen;
