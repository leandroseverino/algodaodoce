import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

import MyHeader from "../components/MyHeader";


const HomeScreen = props => {
  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Home" />
      <Image 
        style={{ width: imageWidth, height: imageHeight}}
        source={require('../resources/imgs/logo-algodao.jpg')} />
      <Text style={{fontWeight:'bold', textAlign:'center', textTransform:'uppercase', marginTop:-25}}>Bem Vindo</Text>
      <Text style={{fontWeight:'bold', textAlign:'center', marginTop: 15}}>Cuidando com doçura do seu maior patrimônio.</Text>  
    </View>
  );
};

export default HomeScreen;