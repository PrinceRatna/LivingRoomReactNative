/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//import liraries
import React, {Component} from 'react';
import { SafeAreaView, SafeAreaViewBase, Text} from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { View, StyleSheet } from 'react-native';

const config = {
  hasXAxisBackgroundLines: false,
  xAxisLabelStyle: {
    position: 'left',
    prefix: '$',
  }
};
// create a component
const BarGraph = () => {
  return (
<SafeAreaView>
    <VerticalBarGraph
      data={[20, 45, 28, 80, 99, 43, 50]}
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
      width={375}
      height={300}
      barColor='black'
      barRadius={5}
      barWidthPercentage={0.65}
      baseConfig={config}
      style={styles.chart}
    />
  
</SafeAreaView>
    
  );
};

// define your styles
const styles = StyleSheet.create({
    chart: {
        marginBottom: 30,
        padding: 10,
        paddingTop: 20,
        borderRadius: 20,
        // backgroundColor: 'green',
        width: 375,
       
      }
     
});

//make this component available to the app
export default BarGraph;
