import React from "react";
import { View, Text } from "react-native";

import MyHeader from "../components/MyHeader";

const CardapioScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Cardapio" />
      <Text>This is Cardapio Screen</Text>
    </View>
  );
};

export default CardapioScreen;