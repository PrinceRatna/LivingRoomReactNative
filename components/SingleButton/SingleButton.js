/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pressable} from 'react-native';



    const SingleButton = ({title}) => {
        return (
           <View style={styles.container}>
            <Pressable style={styles.button} >
           <Text style={styles.text}>{title}</Text>
         </Pressable>
         </View>
        );
    };

      //----------- define your styles----------
const styles = StyleSheet.create({
    container:{
        width:90,
        marginVertical:50,
        marginHorizontal:5,
    },
    button: {
        paddingVertical:20,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    });

export default SingleButton;
