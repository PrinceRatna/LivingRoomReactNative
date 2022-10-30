/* eslint-disable prettier/prettier */

import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

export default class StaticButton extends React.Component {
  state = {activeIndex: 0};

  render() {
    // console.log(this.props.getId);
    return (
       <View style={styles.container}>
          <View >
            <TouchableOpacity onPress={() => {
              this.setState({ activeIndex: 1 });
              this.props.setId(1);
            }}
              style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
              <Text  style={this.state.activeIndex === 1 ?styles.textActiveColor:styles.textColor }> Day </Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity onPress={() => {
              this.setState({ activeIndex: 2 });
              this.props.setId(2);

            }}
              style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}>
              <Text style={this.state.activeIndex === 2 ?styles.textActiveColor:styles.textColor }> Week </Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity onPress={() => {
              this.setState({ activeIndex: 3});
              this.props.setId(3);

            }}
              style={this.state.activeIndex === 3 ? styles.btnActive : styles.btn}>              
              <Text style={this.state.activeIndex === 3 ?styles.textActiveColor:styles.textColor }> Month </Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity onPress={() => {
              this.setState({ activeIndex: 4 });
              this.props.setId(4);

            }}
                style={this.state.activeIndex === 4 ? styles.btnActive : styles.btn}>
              <Text style={this.state.activeIndex === 4 ?styles.textActiveColor:styles.textColor }> Year </Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent:'space-between' ,
    marginVertical:50,
    marginHorizontal:5,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    
    borderRadius: 10,
    borderWidth:0,
   

    paddingVertical:20,
    paddingHorizontal: 20,
   
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: 'black',
  
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    paddingVertical:20,
    paddingHorizontal: 20,

  },
  textColor:{
    color:'black',
    fontSize: 16,
    fontWeight: 'bold',
   letterSpacing: 0.25,
  },
  textActiveColor:{
    color:'white', 
    fontSize: 16,
   fontWeight: 'bold',
   letterSpacing: 0.25,
  }

  
});

