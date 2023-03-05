import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, Margin, FontFamily } from "../GlobalStyles";

const CallCounselor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.callcounselor}>
      <LinearGradient
        style={[styles.callcounselorChild, styles.callcounselorPosition]}
        locations={[0, 0.51, 1]}
        colors={["#282424", "rgba(40, 36, 36, 0)", "#282424"]}
      />
      <View style={[styles.callcounselorItem, styles.callcounselorPosition]} />
      <Image
        style={[styles.iconLayout, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
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
        style={[styles.groupIcon, styles.iconLayout, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <View style={styles.bottomiconsWrapper}>
        <View style={styles.bottomicons}>
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
              source={require("../assets/vector10.png")}
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
      <Pressable
        style={styles.card3Wrapper}
        onPress={() => Linking.openURL("tel:+94 1926")}
      >
        <Image
          style={styles.card3Icon}
          resizeMode="cover"
          source={require("../assets/card-3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  callcounselorPosition: {
    left: 0,
    display: "none",
    position: "absolute",
  },
  groupIconPosition: {
    left: "9.72%",
    bottom: "2.13%",
    right: "9.72%",
    top: "94.62%",
    width: "80.56%",
    height: "3.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    width: "7.99%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  callcounselorChild: {
    top: 0,
    width: 360,
    height: 808,
    backgroundColor: "transparent",
    display: "none",
  },
  callcounselorItem: {
    top: 691,
    borderRadius: Border.br_md,
    backgroundColor: Color.whitesmoke_100,
    width: 393,
    height: 158,
    display: "none",
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
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
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
    bottom: 0,
    right: "0%",
    height: 26,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  bottomiconsWrapper: {
    width: "92.76%",
    right: "3.61%",
    bottom: 17,
    left: "3.63%",
    height: 26,
    position: "absolute",
  },
  card3Icon: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  card3Wrapper: {
    height: "52.38%",
    width: "73.06%",
    top: "22.25%",
    right: "13.47%",
    bottom: "25.38%",
    left: "13.47%",
    shadowColor: "#65ff06",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    position: "absolute",
  },
  callcounselor: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default CallCounselor;
