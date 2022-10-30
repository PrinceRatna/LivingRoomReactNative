/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './components/Screens/Screens';
import { View } from 'react-native';
import { createContext } from 'react';

const User=createContext();

const App=()=> {
const user={}
 const[price,setPrice]=React.useState('');
 const[mac,setMac]=React.useState('');
return(
  <NavigationContainer>
    <User.Provider value={{price,setPrice,mac,setMac}}>
    <Screen/>   
    </User.Provider>
</NavigationContainer>
  )
}



export default App;
export {User};



 







// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });





