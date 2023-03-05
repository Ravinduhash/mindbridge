import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatscreen}>
      <View style={styles.chatscreenChild} />
      <View style={[styles.gr, styles.grLayout]}>
        <View
          style={[
            styles.bottomicons,
            styles.groupInnerPosition,
            styles.grLayout,
          ]}
        >
          <Pressable
            style={[styles.vector, styles.grLayout]}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={[styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector24.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector1, styles.vectorPosition]}
            onPress={() => navigation.navigate("MusicPlayer")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector25.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector2, styles.vectorPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector26.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorPosition,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector27.png")}
          />
        </View>
      </View>
      <Text style={[styles.howAreYou, styles.howAreYouTypo]}>
        how are you today?
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.hi, styles.hiTypo]}>Hi</Text>
        <Text style={[styles.hiHowAre, styles.hiTypo]}>Hi, How are you?</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Text style={[styles.comeOnChatWith, styles.howAreYouTypo]}>
        Come-on, Chat with ME!
      </Text>
      <View style={styles.rectangleGroup}>
        <View
          style={[
            styles.groupInner,
            styles.vectorPosition,
            styles.groupInnerPosition,
          ]}
        />
        <TextInput
          style={[styles.typeSomething, styles.micIconLayout]}
          placeholder="Type something..."
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <Image
          style={[styles.micIcon, styles.micIconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/mic-icon.png")}
        />
        <Image
          style={[styles.emojiIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/emoji-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grLayout: {
    height: 26,
    position: "absolute",
  },
  groupInnerPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  howAreYouTypo: {
    textAlign: "left",
    textTransform: "capitalize",
    left: 23,
    color: Color.white,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  hiTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  micIconLayout: {
    height: "52.17%",
    position: "absolute",
  },
  chatscreenChild: {
    top: 691,
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: Color.whitesmoke_100,
    width: 393,
    height: 158,
    display: "none",
    position: "absolute",
  },
  vector: {
    right: "90.36%",
    width: "9.64%",
    top: 0,
    left: "0%",
  },
  icon1: {
    maxHeight: "100%",
  },
  vector1: {
    left: 85,
    width: 27,
  },
  icon2: {
    maxHeight: "100%",
  },
  vector2: {
    left: "60.5%",
    right: "29.86%",
    width: "9.64%",
  },
  vectorIcon: {
    right: "-0.75%",
    left: "91.1%",
    maxHeight: "100%",
    width: "9.64%",
  },
  bottomicons: {
    bottom: 0,
    left: "0%",
  },
  gr: {
    right: "11.61%",
    bottom: 16,
    left: "11.56%",
    width: "76.83%",
  },
  howAreYou: {
    fontSize: FontSize.size_xs,
    top: 91,
  },
  groupChild: {
    right: 0,
    backgroundColor: "#86ff3a",
    width: 158,
    height: 56,
    top: 0,
  },
  hi: {
    top: 20,
    right: 26,
    color: Color.gray_100,
    width: 120,
    height: 21,
  },
  hiHowAre: {
    top: 110,
    left: "2.96%",
    color: Color.white,
    fontSize: FontSize.size_2xs,
  },
  groupItem: {
    width: "37.76%",
    right: "62.24%",
    borderStyle: "solid",
    borderColor: "#89ff41",
    borderWidth: 2,
    height: 59,
    top: 91,
    left: "0%",
  },
  rectangleParent: {
    top: 150,
    right: 5,
    width: 350,
    height: 150,
    position: "absolute",
  },
  comeOnChatWith: {
    top: 49,
    fontSize: FontSize.size_base,
  },
  groupInner: {
    borderRadius: 16,
    backgroundColor: "rgba(137, 255, 65, 0.84)",
    left: "0%",
  },
  typeSomething: {
    top: "32.61%",
    left: "12.32%",
    width: "76.83%",
  },
  micIcon: {
    width: "4.32%",
    top: "23.91%",
    right: "4.16%",
    bottom: "23.91%",
    left: "91.52%",
    maxHeight: "100%",
  },
  emojiIcon: {
    height: "47.83%",
    width: "5.92%",
    top: "26.09%",
    right: "90.22%",
    bottom: "26.09%",
    left: "3.87%",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "5.75%",
    width: "94.72%",
    top: "86.75%",
    right: "2.78%",
    bottom: "7.5%",
    left: "2.5%",
    position: "absolute",
  },
  chatscreen: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatScreen;
