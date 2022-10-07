/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
//import liraries
import React from 'react';
import { View,  StyleSheet } from 'react-native';
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
         const ButtonScreen = () => {
           return (
             <View style={styles.container}>
             {
                 buttonData.map((data)=><SingleButton key={data.id} title={data.title}/>)
             }
             </View>
           );
         };

        //------------ define your styles----------------
    const styles = StyleSheet.create({
        container: {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        },
    });
export default ButtonScreen;
