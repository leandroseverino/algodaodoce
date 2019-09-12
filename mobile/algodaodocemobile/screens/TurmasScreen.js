import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const TurmasScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Turmas" />
      <Text>This is Turmas Screen</Text>
    </View>
  );
};

export default TurmasScreen;