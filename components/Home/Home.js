/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
//import liraries
//import liraries
import React from 'react';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet,  Pressable, TextInput } from 'react-native';
import {User} from '../../App';
        const Home = () => {
          const {mac,setMac}=useContext(User);
          const[onChangeMacId,setOnChangeMacId]=React.useState("");

          const handleId=()=>{
            setMac(onChangeMacId);
            alert('Go to living room page and set price.')


          }
          const onChangeNumber=(e)=>{
            setOnChangeMacId(e)
 
          }

            return (
                <View style={styles.container}>
                     <Text style={styles.headerText}>Making Your Appliances Smarter</Text>
                     <TextInput
                     style={styles.input}
                     onChangeText={onChangeNumber}
                    //  value={macId}
                     placeholder="Enter Device Mac Add:"
                     />
                     <Pressable style={styles.button} onPress={handleId} >
                      <Text style={styles.text}>Add Device</Text>
                      </Pressable>
                     
                </View>
               
            );
        };

         // ------------define your styles--------------
      const styles = StyleSheet.create({
          container: {
      
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',
              height:'100%',
          },
         
          headerText: {
              fontSize:25,
              lineHeight:30,
              fontWeight: 'bold',
              color: 'black',
              marginTop:10,
            },
          input: {
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius:10,
              width:'80%',
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
          text: {
            fontSize:25,
            lineHeight:30,
            fontWeight: 'bold',
            letterSpacing: 1,
            color: 'white',
          },
        });
      
export default Home;
