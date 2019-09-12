import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const CalendarioScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Calendario" />
      <Text>This is Calendario Screen</Text>
    </View>
  );
};

export default CalendarioScreen;