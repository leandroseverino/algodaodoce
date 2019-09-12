import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const GaleriasScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Galerias" />
      <Text>This is Galerias Screen</Text>
    </View>
  );
};

export default GaleriasScreen;