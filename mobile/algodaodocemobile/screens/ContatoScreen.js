import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const ContatoScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Contato" />
      <Text>This is Contato Screen</Text>
    </View>
  );
};

export default ContatoScreen;