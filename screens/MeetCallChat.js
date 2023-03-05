import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, Margin, FontFamily } from "../GlobalStyles";

const MeetCallChat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetcallchat}>
      <View style={styles.meetcallchatChild} />
      <Image
        style={[styles.meetcallchatItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-52.png")}
      />
      <ImageBackground
        style={[styles.mesh1Edited1, styles.card3IconPosition]}
        resizeMode="cover"
        source={require("../assets/mesh1edited1.png")}
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
      <Pressable
        style={[
          styles.card3Wrapper,
          styles.card3ShadowBox,
          styles.card3ShadowBox1,
        ]}
        onPress={() => navigation.navigate("CallCounselor")}
      >
        <Image
          style={[
            styles.card3Icon,
            styles.card3IconPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/card-31.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.card3Container,
          styles.card3ShadowBox,
          styles.card3ShadowBox1,
        ]}
        onPress={() => navigation.navigate("ChatCounselor")}
      >
        <Image
          style={[
            styles.card3Icon,
            styles.card3IconPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/card-32.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.card3Frame, styles.card3ShadowBox]}
        onPress={() => navigation.navigate("MeetCounselor")}
      >
        <Image
          style={[
            styles.card3Icon,
            styles.card3IconPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/card-33.png")}
        />
      </Pressable>
      <View style={[styles.bottomiconsWrapper, styles.bottomiconsLayout]}>
        <View style={[styles.bottomicons, styles.bottomiconsLayout]}>
          <Pressable
            style={[styles.vector, styles.vectorPosition]}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector16.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector1, styles.vectorPosition]}
            onPress={() => navigation.navigate("MusicPlayer")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector17.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector2, styles.vectorPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector18.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  card3IconPosition: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  card3ShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#65ff06",
    position: "absolute",
  },
  card3ShadowBox1: {
    left: "20%",
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#65ff06",
  },
  bottomiconsLayout: {
    height: 26,
    position: "absolute",
  },
  vectorPosition: {
    width: "8.1%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  meetcallchatChild: {
    top: 691,
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: Color.whitesmoke_100,
    width: 393,
    height: 158,
    position: "absolute",
  },
  meetcallchatItem: {
    height: "3.25%",
    width: "80.56%",
    top: "94.62%",
    right: "9.72%",
    bottom: "2.13%",
    left: "9.72%",
    position: "absolute",
  },
  mesh1Edited1: {
    left: "0%",
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
    width: "83.36%",
    top: "5.77%",
    left: "6.98%",
    textTransform: "capitalize",
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  card3Icon: {
    left: "0%",
  },
  card3Wrapper: {
    height: "17.2%",
    width: "59.86%",
    top: "42.15%",
    right: "20.14%",
    bottom: "40.65%",
  },
  card3Container: {
    height: "18.63%",
    width: "59.75%",
    top: "64.77%",
    right: "20.25%",
    bottom: "16.59%",
  },
  card3Frame: {
    height: "17.72%",
    width: "61.42%",
    top: "18.88%",
    right: "19.42%",
    bottom: "63.4%",
    left: "19.17%",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    right: "91.9%",
    left: "0%",
  },
  vector1: {
    left: "29.06%",
    right: "62.85%",
  },
  vector2: {
    left: "60.54%",
    right: "31.36%",
  },
  vectorIcon: {
    right: "2.61%",
    left: "89.29%",
  },
  bottomicons: {
    bottom: 0,
    left: "0%",
    right: "0%",
    height: 26,
    width: "100%",
  },
  bottomiconsWrapper: {
    width: "91.46%",
    right: "4.21%",
    bottom: 28,
    left: "4.33%",
  },
  meetcallchat: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetCallChat;
