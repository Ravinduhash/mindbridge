import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";


import { WebView } from 'react-native-webview';
const Gameview = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://www.silvergames.com/en/bubble-shooter' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameview: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 1020,
    overflow: "hidden",
  },
});

export default Gameview;
