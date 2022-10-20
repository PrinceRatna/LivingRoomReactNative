/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//import liraries
import React, {useEffect} from 'react';
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

     const BarGraph = () => {

      const [dayPrice,setDayPrice]=React.useState([]);
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

      })
      },[])
       let graphDataValueY=[];
       let graphDataValueX=[];

      
       dayPrice.map(data=>graphDataValueX.push(data.date));
       dayPrice.map(data=>graphDataValueY.push(data.price));
   
     
      // console.log(graphDataValueY.slice(15,24));
      // console.log(graphDataValueY);
       return (
              <SafeAreaView>
               
                  <VerticalBarGraph
                    data={graphDataValueY.slice(20,24)}
                    labels={graphDataValueX.slice(20,24)}
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
     
            //------------ define your styles------------
     const styles = StyleSheet.create({
         chart: {
             marginBottom: 30,
             padding: 10,
             paddingTop: 20,
             borderRadius: 20,
             width: 375,
            
           }
          
     });

export default BarGraph;
