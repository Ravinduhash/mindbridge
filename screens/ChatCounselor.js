import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, Margin, FontFamily } from "../GlobalStyles";

const ChatCounselor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatcounselor}>
      <LinearGradient
        style={[styles.chatcounselorChild, styles.chatcounselorPosition]}
        locations={[0, 0.51, 1]}
        colors={["#282424", "rgba(40, 36, 36, 0)", "#282424"]}
      />
      <View style={[styles.chatcounselorItem, styles.chatcounselorPosition]} />
      <Image
        style={[styles.chatcounselorInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={styles.mesh1Edited1}
        resizeMode="cover"
        source={require("../assets/mesh-1-edited-1.png")}
      />
      <Text style={styles.alwaysWeAreContainer}>
        <Text style={styles.always}>
          <Text style={styles.always1}>{`ALWAYS, `}</Text>
        </Text>
        <Text style={styles.weAreWithYou}>
          <Text style={styles.always1}>{`We are with `}</Text>
          <Text>YOU</Text>
          <Text>!</Text>
        </Text>
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={[styles.bottomiconsWrapper, styles.bottomiconsLayout]}>
        <View style={[styles.bottomicons, styles.bottomiconsLayout]}>
          <Pressable
            style={[styles.vector, styles.vectorPosition]}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector1, styles.vectorPosition]}
            onPress={() => navigation.navigate("MusicPlayer")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector5.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector2, styles.vectorPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatcounselorPosition: {
    display: "none",
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bottomiconsLayout: {
    height: 26,
    position: "absolute",
  },
  vectorPosition: {
    width: "7.99%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  chatcounselorChild: {
    top: 0,
    width: 360,
    height: 808,
    backgroundColor: "transparent",
  },
  chatcounselorItem: {
    top: 691,
    borderRadius: Border.br_md,
    backgroundColor: Color.whitesmoke_100,
    width: 393,
    height: 158,
  },
  chatcounselorInner: {
    height: "3.25%",
    width: "80.56%",
    top: "94.63%",
    right: "9.72%",
    bottom: "2.12%",
    left: "9.72%",
    position: "absolute",
  },
  mesh1Edited1: {
    height: "101.63%",
    width: "101.81%",
    right: "-1.81%",
    bottom: "-1.62%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  always1: {
    fontSize: FontSize.size_base,
  },
  always: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  weAreWithYou: {
    margin: Margin.m_md,
  },
  alwaysWeAreContainer: {
    height: "7.63%",
    width: "61.11%",
    top: "8.75%",
    left: "6.39%",
    textTransform: "capitalize",
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "57%",
    width: "74.17%",
    top: "22.13%",
    right: "12.64%",
    bottom: "20.88%",
    left: "13.19%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    right: "92.01%",
    height: "100%",
    left: "0%",
  },
  vector1: {
    left: "28.95%",
    right: "63.07%",
    height: "100%",
  },
  vector2: {
    left: "60.29%",
    right: "31.72%",
    height: "100%",
  },
  vectorIcon: {
    right: "2.77%",
    left: "89.24%",
    height: "100%",
  },
  bottomicons: {
    right: "0%",
    bottom: 0,
    left: "0%",
    width: "100%",
  },
  bottomiconsWrapper: {
    width: "92.76%",
    right: "3.61%",
    bottom: 17,
    left: "3.63%",
  },
  chatcounselor: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatCounselor;
