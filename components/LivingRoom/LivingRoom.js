/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native'
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-paper';
import {User} from '../../App';
import { useContext } from 'react';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';



const LivingRoom = ({navigation}) => {
      const {price,setPrice,mac,setMac}=useContext(User);

        const [isEnabled, setIsEnabled] = React.useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        const [slideCompletionValue, setSlideCompletionValue] = React.useState(0);
        const[userDetail,setUserDetail]=React.useState({});

        //-----------------switch on/off-------------------------
if(isEnabled){
        fetch("http://185.96.163.154:2336/controlSwitch",{
          method:'POST',
          headers:{
              'content-type':'application/json',
              'Api-Key':'India75',
              // 'Connection':'keep-alive',
              // 'Accept-Encoding':'gzip,deflate,br',
              // 'Accept':'*/*'
          },
          body:JSON.stringify({
            "gateway_id": "30:ae:7b:e2:e6:9e",
            "switch_id": "000d6f000be7b777",
            "off_on":1
          })

      })
      .then(res=>console.log('on'))
      .then(data=>{
          // console.log(data);
      })


    }
    else{

      fetch("http://185.96.163.154:2336/controlSwitch",{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'Api-Key':'India75',
            // 'Connection':'keep-alive',
            // 'Accept-Encoding':'gzip,deflate,br',
            // 'Accept':'*/*'
        },
        body:JSON.stringify({
          "gateway_id": "30:ae:7b:e2:e6:9e",
          "switch_id": "000d6f000be7b777",
          "off_on":0
        })

    })
    .then(res=>console.log('off'))
    .then(data=>{
        // console.log(data);
    })


    }


          //  -----------------------get all users--------------------------------
        async function getUsers() {
          const response = await fetch(
            'http://192.168.0.108:5000/allUsers',
            {
              method: 'GET',
             
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();

          return data;
        }
       
       

        //---------------------- button click handle -------------------------
        const handlePrice=async ()=>{
        if(mac){
          setPrice(slideCompletionValue);
          let users=await  getUsers();
                
          // console.log('Users from db:', users );


          let result =await users.filter(function (user)
          {
            return user.macId==mac;
          });



    //  -----------------------update price -----------------------
           if(result[0]){

            fetch('http://192.168.0.108:5000/allUsers',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
              price:slideCompletionValue,
              macId:mac
            })

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                alert('Successfully added new price .')
            }
        })


           }

          //  -------------------------post new users----------------------
           else{
            fetch('http://192.168.0.108:5000/AddUsers',{
              method:'POST',
              headers:{
                  'content-type':'application/json',
                          'Connection':'keep-alive',
                          'Accept-Encoding':'gzip,deflate,br',
                          'Accept':'*/*'
              },
              body:JSON.stringify({
                price:slideCompletionValue,
                macId:mac
              })
  
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              alert('Successfully Added .')
          }
             
          })

           }

          }else{
            alert('At first, add your mac id');
          }

        }

       

    return (
        <ScrollView>
          {/* <Button onPress={handleProductSubmit}>CLICK</Button> */}
          {/* {
            dayPrice.map(data=><Text>Price :{data.price}</Text>) 
          } */}
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

                {/*-------------- Troggle Switch------------  */}
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
     
                 {/*--------------- slider------------------- */}
          <View style={styles.slideContainer}>
                     <Text style={styles.text}>Energy Price Threshold Controller</Text>
                     <Text style={styles.dolar}>Cost: € {slideCompletionValue.toPrecision(3)}</Text>
                      <Slider
                            style={{width:'95%', height: 60}}
                            minimumValue={0.1}
                            maximumValue={100}
                            minimumTrackTintColor="black"
                            maximumTrackTintColor="#000000"
                            onSlidingComplete={value => {
                             setSlideCompletionValue(value);
                            
                           }}
                      />
                       <Pressable style={styles.button} onPress={handlePrice} >
                        <Text style={styles. buttonText}>SUBMIT</Text>
                      </Pressable>
          </View>
          <Text style={styles.footerText}>Set your Price To Auto Turn Off Devices Based On Nordpool Prices</Text>

         </ScrollView>
    );
};

            //--------------- Style ---------------

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
                width:350,
                height: 270,
              },
           
            footer:{
                width:'49%',
                height:120,
                padding:15,
                backgroundColor: '#c9c7c7',
        
                borderRadius:15,
            },
            dolar:{
            //  marginLeft:'30%', 
             fontSize: 18,
             fontWeight:'bold',
             marginTop:25,
        
        
            },
            footerText:{
              margin:15,
              borderWidth:1,
              borderRadius:10,
              borderColor:'green',
              padding:8,
            },
            slideContainer: {
      
              display:'flex',
              // justifyContent:'center',
              alignItems: 'center',
              // height:'100%',
              marginHorizontal:2,
              marginVertical:20
          },
         
            button: {
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 10,
              backgroundColor: 'black',
              marginTop:10,
              width:'80%',
            },
            buttonText: {
              fontSize:25,
              lineHeight:30,
              fontWeight: 'bold',
              letterSpacing: 1,
              color: 'white',
            },
  });


export default LivingRoom;



