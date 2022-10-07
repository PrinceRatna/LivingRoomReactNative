/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView , Dimensions, SafeAreaView, Button, Pressable} from 'react-native';
import BarGraph from '../BarGraph/BarGraph';
import ButtonScreen from '../ButtonScreen/ButtonScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 10;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = 35;
// create a component
const Statistic = ({navigation}) => {
         
    return (
        <ScrollView style={styles.scrollViewContainer}>
          
         <View style={styles.headerContainer}>
            <Icon name="arrow-back"  size={30}  onPress={() => {
        navigation.navigate('LivingRoom')}}/>
        <Text style={styles.headersText}> Statistic</Text>
        </View>


        <View>
            <ButtonScreen/>
            <BarGraph/>
            
    
      <View style={styles.sectionContainer}>
        <View style={styles.boxContainer}><Text style={styles.text}>Monthly expense</Text></View>
        <View style={styles.boxContainer}><Text style={styles.text1}>view all</Text></View>
        <View style={styles.boxContainer}>
            <Text style={styles.text}>August 2021</Text>
            <Text>20% more from Oct</Text>
        </View>
        <View style={styles.boxContainer}>
            <Text style={styles.text}>$120</Text>
        </View>
        <View style={styles.boxContainer}>
            <Text style={styles.text}>July 2021</Text>
            <Text>20% more from Oct</Text>
        </View>
        <View style={styles.boxContainer}><Text style={styles.text}>$100</Text></View>
       
      </View>
  
  
        </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
     headerContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginLeft:10,
        marginTop:50,

        
     },
     headersText:{
      marginLeft:50,
      fontSize:30, 
      fontWeight:'bold',
      color:'black'},

      sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
      boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
     
      text:{
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
      text1:{
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'yellow',
      }
});

//make this component available to the app
export default Statistic;
