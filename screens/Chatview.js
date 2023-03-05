import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";


import { WebView } from 'react-native-webview';
const Chatview = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://ravinduhash.github.io/chatbot/' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatview: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 1020,
    overflow: "hidden",
  },
});

export default Chatview;
