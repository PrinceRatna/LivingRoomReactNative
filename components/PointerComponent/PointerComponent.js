//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const PointerComponent = () => {
    return (
        <View
        style={{
          height: 90,
          width: 100,
          justifyContent: 'center',
          marginTop: -30,
          marginLeft: -40,
        }}>
        <Text style={{color: 'white', fontSize: 14, marginBottom:6,textAlign:'center'}}>
          {items[0].date}
        </Text>

        <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
          <Text style={{fontWeight: 'bold',textAlign:'center'}}>
            {'$' + items[0].value + '.0'}
          </Text>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PointerComponent;
