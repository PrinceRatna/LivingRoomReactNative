/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
//import liraries
//import liraries
//import liraries
import React, { useEffect }from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  const screenWidth = Dimensions.get("window").width;

const LineGraph = () => {
    
    const [loading,setLoading] = React.useState(true)
    const [dayPrice,setDayPrice]=React.useState([]);
    let graphDataValueY=[];
    let graphDataValueX=[];
    useEffect(()=>{

      fetch("http://185.96.163.154:2335/getDayPrice",{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'Api-Key':'India75',
            // 'Connection':'keep-alive',
            // 'Accept-Encoding':'gzip,deflate,br',
            // 'Accept':'*/*'
        },
        body:JSON.stringify({"sensor_id": "1234abc1",
        "gateway_id": "1234abc2",
        "app_id": "1234abc2",
        "start_date": "2022-10-19",
        "end_date": "2022-10-20"
        })

    })
    .then(res=>res.json())
    .then(data=>{
          setDayPrice(data.OperatingPoint);
          setLoading(false)
    })
    },[])
    

    // console.log(dayPrice);
     dayPrice.map(data=>graphDataValueX.push(data.time));
    dayPrice.map(data=>graphDataValueY.push(data.price)/100);
   



     const data = {
      labels:graphDataValueX,
      datasets: [
        {
          data: graphDataValueY,
          color: () =>'#6aeb81', // optional
          strokeWidth: 2 // optional
        }
      ],
      // legend: ["Rainy Days"] // optional
    };





    const chartConfig = {
        backgroundGradientFrom:'black',
        backgroundGradientFromOpacity:1,
        backgroundGradientTo: "black",
        backgroundGradientToOpacity: 1,
        color:()=>'white',
        strokeWidth:0, // optional, default 3
        barPercentage: 0,
        useShadowColorFromDataset: true ,// optional
        fillShadowGradient:'#6aeb81',
        fillShadowGradientFromOpacity:0.6,
        fillShadowGradientToOpacity:0.01,
      };

    
    
   
    return (
        <SafeAreaView >
          {

         loading?<Text>Loading.........</Text>:<LineChart
         data={data}
         width={screenWidth}
         height={400}
         verticalLabelRotation={65}
         chartConfig={chartConfig}
         bezier
             />
          }
            
            </SafeAreaView>

    );
};




//make this component available to the app
export   default LineGraph;
