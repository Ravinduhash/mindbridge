import * as React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start}>
      <Image
        style={[styles.greenForest1Icon, styles.startItemLayout]}
        resizeMode="cover"
        source={require("../assets/green-forest-1.png")}
      />
      <ImageBackground
        style={styles.startPosition}
        resizeMode="cover"
        source={require("../assets/rectangle24.png")}
      />
      <Image
        style={[styles.startPosition, styles.startItemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Text style={[styles.mindbridge, styles.mindbridgePosition]}>
        MindBridge
      </Text>
      <Text style={[styles.aHelpingHand, styles.mindbridgePosition]}>
        A helping hand to bridge the gap between you and your mental health,
        providing a path towards a healthier and happier life.
      </Text>
      <Pressable
        style={styles.group151}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-15-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  startItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mindbridgePosition: {
    color: Color.white,
    textTransform: "capitalize",
    left: "50%",
    position: "absolute",
  },
  greenForest1Icon: {
    top: 157,
    right: -4,
    bottom: 106,
    left: -5,
    display: "none",
    position: "absolute",
  },
  startPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  mindbridge: {
    marginLeft: -127,
    top: "48.93%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
  },
  aHelpingHand: {
    height: "6.54%",
    marginLeft: -160,
    top: "62.01%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "center",
    width: 319,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  group151: {
    left: "9.72%",
    top: "78.88%",
    right: "9.72%",
    bottom: "12.5%",
    width: "80.56%",
    height: "8.63%",
    position: "absolute",
  },
  start: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Start;
