import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Margin, Color } from "../GlobalStyles";

const MeetCounselor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetcounselor}>
      <Image
        style={[styles.mesh1Edited1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/mesh-1-edited-1.png")}
      />
      <Text style={[styles.alwaysWeAreContainer, styles.containerTypo]}>
        <Text style={styles.always}>
          <Text style={styles.always1}>{`ALWAYS, `}</Text>
        </Text>
        <Text style={styles.weAreWithYou}>
          <Text style={styles.always1}>{`We are with `}</Text>
          <Text>YOU</Text>
          <Text>!</Text>
        </Text>
      </Text>
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
        onPress={() =>
          Linking.openURL(
            "https://nimh.health.gov.lk/en/1926-national-mental-health-helpline/"
          )
        }
      >
        <View style={[styles.card3, styles.card3Position]}>
          <Pressable
            style={[
              styles.card3Child,
              styles.card3Layout,
              styles.card3Position,
            ]}
            onPress={() => Linking.openURL("nimh.health.gov.lk")}
          />
          <Text style={[styles.date5032023Container, styles.containerTypo]}>
            <Text style={styles.always}>Date : 5/03/2023</Text>
            <Text style={styles.always}>Time : 8.30 AM</Text>
            <Text style={styles.weAreWithYou}>Contact No: 0777462222</Text>
          </Text>
          <Text style={[styles.meetYourCounselor, styles.msAyanthiTypo]}>
            Meet Your Counselor
          </Text>
          <Image
            style={[styles.card3Item, styles.card3Layout, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <View style={styles.card3Inner} />
          <Text style={[styles.msAyanthi, styles.msAyanthiTypo]}>
            Ms. Ayanthi
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  containerTypo: {
    textAlign: "left",
    position: "absolute",
  },
  vectorPosition: {
    width: "7.99%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  card3Position: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  card3Layout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  msAyanthiTypo: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  mesh1Edited1: {
    height: "101.63%",
    width: "101.81%",
    right: "-1.81%",
    bottom: "-1.62%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
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
  card3Child: {
    backgroundColor: Color.gray_100,
    height: "100%",
  },
  date5032023Container: {
    width: "65.96%",
    top: "75.66%",
    left: "11.35%",
    fontSize: FontSize.size_2xs,
    color: Color.chartreuse_100,
  },
  meetYourCounselor: {
    width: "68.82%",
    top: "3.11%",
    left: "15.4%",
    color: "#65ff06",
  },
  card3Item: {
    height: "35.8%",
    width: "82.89%",
    top: "23.87%",
    right: "8.56%",
    bottom: "40.33%",
    left: "8.56%",
  },
  card3Inner: {
    height: "0.24%",
    width: "76.75%",
    top: "20.09%",
    right: "11.65%",
    bottom: "79.67%",
    left: "11.6%",
    borderStyle: "solid",
    borderColor: "#65ff06",
    borderTopWidth: 1,
    position: "absolute",
  },
  msAyanthi: {
    top: "61.81%",
    left: "28.71%",
    color: Color.chartreuse_100,
  },
  card3: {
    height: "100%",
    position: "absolute",
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
  meetcounselor: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetCounselor;
