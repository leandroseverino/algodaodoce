import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const EscolaScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Escola" />
      <Text>This is Escola Screen</Text>
    </View>
  );
};

export default EscolaScreen;