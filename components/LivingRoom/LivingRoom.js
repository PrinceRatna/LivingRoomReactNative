/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native'
import Slider from '@react-native-community/slider';




// create a component
const LivingRoom = ({navigation}) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
             {/* <Icon style={{marginLeft:30,marginTop:15}} name="arrow-back"  size={30}  onPress={() => {
        navigation.navigate('Home')}}/> */}
         <View style={styles.container}>
         <View> 
            <Text style={styles.text}> Living Room</Text>
            <Text> 4 Devices are active now</Text>
            </View>
            <Icon name="ios-notifications-outline" size={30}/>
        </View>
       <View style={styles.container}>
        <Text style={styles.iconStyle}><Icon name="ios-bulb" size={30}/></Text>
        <Text style={styles.iconStyle}><Icon name="ios-lock-closed" size={30}/></Text>
        <Text style={styles.iconStyle}> <Icon name="file-tray-stacked" size={30}/></Text>
        <Text style={styles.iconStyle}> <Icon name="ios-disc" size={30}/></Text>
        
        
       
           
     </View>
     <View style={styles.container} >
        <View>
            <Image style={styles.tinyLogo}
          source={require('../../assests/img.png')}
          />
      </View>
       
      
     </View>
     <View style={styles.container}>

        <View style={styles.footer}>
            <Text style={styles.text}>4kWh($3/h)</Text>
            <Text style={{marginTop:15}}>Energy usage</Text>

        </View>

        <View style={styles.footer}>
        

<ToggleSwitch
  isOn={isEnabled}
  onColor="black"
  offColor="#767577"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="large"
  onToggle={toggleSwitch}

/>
<Text style={{marginTop:15}}>Turn on/off</Text>
        </View>
        </View>
     

          <View style={{margin:20}}>
            <Text style={styles.text}>Energy Price Threshold Controller</Text>
              <Slider
                   style={{width:'95%', height: 60}}
                   minimumValue={0}
                   maximumValue={150}
                   minimumTrackTintColor="black"
                   maximumTrackTintColor="#000000"
                />
          </View>

         </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       marginBottom:20,
       marginTop:50,
       marginHorizontal:15,
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'Black',
        
      },
      iconStyle:{
         width:55,
         height:65,
         backgroundColor: '#c9c7c7',
        borderRadius: 10,
        color:'black',
       textAlign:'center',
       padding:10,
        },
      tinyLogo: {
        width:300,
        height: 400,
      },
   
    footer:{
        width:'49%',
        height:120,
        padding:15,
        backgroundColor: '#c9c7c7',

        borderRadius:15,
    }
});


//make this component available to the app
export default LivingRoom;



