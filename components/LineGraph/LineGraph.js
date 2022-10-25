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
import { View,  StyleSheet, SafeAreaView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  import { Circle, G,Rect,Text} from 'react-native-svg';

  const screenWidth  = Dimensions.get("window").width;

const LineGraph = () => {
    
    const [loading,setLoading] = React.useState(true)
    const [dayPrice,setDayPrice]=React.useState([]);
    let graphDataValueY=[];
    let graphDataValueX=[];


   
    const Tooltip = ({ x, y, textX, textY,data,state, stroke, pointStroke, position }) => {
      const { index, value } = state;
      let tipW = 136,
          tipH = 36,
          tipX = 5,
          tipY = -9,
          tipTxtX = 12,
          tipTxtY = 6;
      const posY = y;
      const posX = x;
        // console.log(posX,posY)
        // console.log(textX,textY)
      if (posX > screenWidth - tipW) {
          tipX = -(tipX + tipW);
          tipTxtX = tipTxtX - tipW - 6;
      }
  
      const boxPosX = position === 'left' ? posX - tipW - 10 : posX;
  
      return (
          <G>
              <Circle
                  cx={posX}
                  cy={posY}
                  r={4}
                  stroke={pointStroke}
                  strokeWidth={2}
                  fill={'black'}
              />
              <G x={boxPosX < 40 ? 40 : boxPosX} y={posY}>
                  <Rect
                      x={tipX + 25}
                      y={tipY - 1}
                      width={tipW -50}
                      height={tipH - 2}
                      fill={'rgba(255, 255, 255, 0.9)'}
                      // fill={'transparent'}
                      rx={2}
                      ry={2}
                  />
                  <Rect
                      x={tipX}
                      y={tipY}
                      width={tipW}
                      height={tipH}
                      rx={2}
                      ry={2}
                      fill={'transparent'}
                      stroke={stroke}
                  />
                   <Text x={tipTxtX+15} y={tipTxtY} dx={10} dy={0} fontSize={14} fontFamily="arial" fill="black">
                   € { value }
            </Text>
              <Text  x={tipTxtX+15}   y={tipTxtY + 14} dx={10} dy={0} fontSize={14} fontFamily="arial" fill="black">h:
              {data.labels[index] }
            </Text>

               
                  
              </G>
          </G>
      );
  };





    const tooltipDecorators = (state, data) => () => {
      if (!state.x) {
          return ;
      }
      // console.log(state);

      const { index, value, x, y } = state;
      const textX = data.labels[index];
      const position = data.labels.length === index  ? 'left' : 'right';
      return (
          <Tooltip
              textX={x}
              textY={y}
              x={x}
              y={y}
              data={data}
      
             state={state}
              // stroke={'yellow'}
              pointStroke={'white'}
              position={position}
          />
      );
  };




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
          strokeWidth:0.5 // optional
        }
      ],
      // legend: ["Rainy Days"] // optional
    };





    const chartConfig = {
        backgroundGradient:'black',
        backgroundGradientOpacity:1,
        // backgroundGradientTo: "black",
        // backgroundGradientToOpacity:1,
        color:()=>'white',
        strokeWidth:0, // optional, default 3
        barPercentage: 0,
        useShadowColorFromDataset:false,// optional
        fillShadowGradient:'#6aeb81',
        fillShadowGradientFromOpacity:0.4,
        fillShadowGradientToOpacity:0.01,
      };

    
  const [state, setState] =React.useState({});

   
    return (
        <SafeAreaView >
          {

         loading?<Text>  Loading.........</Text>:<LineChart
         data={data}
         width={screenWidth}
         height={400}
         verticalLabelRotation={90}
         chartConfig={chartConfig}
         withInnerLines={false}  
         fromZero={true}
         yAxisLabel={'€ '}
        
         decorator={tooltipDecorators(state,data)}
         onDataPointClick={(value, dataset, getColor)=>setState(value)}

        //  withDots={false}
         bezier
             />
          }
            
            </SafeAreaView>

    );
};




//make this component available to the app
export   default LineGraph;
