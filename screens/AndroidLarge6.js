import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <ImageBackground
        style={[styles.androidLarge6Child, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle243.png")}
      />
      <Image
        style={[
          styles.androidLarge6Item,
          styles.iconItemLayout,
          styles.childPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Pressable
        style={styles.card2Parent}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Pressable
          style={[styles.card2, styles.cardPosition2, styles.cardLayout]}
          onPress={() => navigation.navigate("Gameview")}
        >
          <View
            style={[
              styles.card2Child,
              styles.card2ChildBg,
              styles.childPosition,
            ]}
          />
          <Text style={[styles.game, styles.gameTypo]}>Game</Text>
          <Image
            style={[styles.card2Item, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <View style={styles.card2Inner} />
          <Image
            style={[styles.musicalNote1Icon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/musicalnote-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.card3, styles.cardPosition1, styles.cardLayout]}
          onPress={() => navigation.navigate("Chatview")}
        >
          <View
            style={[
              styles.card2Child,
              styles.card2ChildBg,
              styles.childPosition,
            ]}
          />
          <Image
            style={[styles.musicalNote1Icon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/musicalnote-11.png")}
          />
          <Text style={[styles.chat, styles.gameTypo]}>Chat</Text>
          <Image
            style={[styles.card2Item, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <View style={styles.card2Inner} />
        </Pressable>
        <TouchableOpacity
          style={[styles.cardPosition, styles.cardPosition1]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MusicPlayer")}
        >
          <View
            style={[
              styles.card2Child,
              styles.card2ChildBg,
              styles.childPosition,
            ]}
          />
          <Text style={[styles.music, styles.gameTypo]}>Music</Text>
          <Image
            style={[styles.card2Item, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-42.png")}
          />
          <View style={styles.card2Inner} />
          <Image
            style={[styles.musicalNote1Icon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/musicalnote-12.png")}
          />
        </TouchableOpacity>
        <Pressable
          style={[styles.cardPosition, styles.cardPosition2]}
          onPress={() => navigation.navigate("MeetCallChat")}
        >
          <View
            style={[
              styles.card2Child,
              styles.card2ChildBg,
              styles.childPosition,
            ]}
          />
          <Text style={[styles.meet, styles.gameTypo]}>Meet</Text>
          <Image
            style={[styles.card2Item, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-43.png")}
          />
          <View style={styles.card2Inner} />
          <Image
            style={[styles.musicalNote1Icon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/musicalnote-13.png")}
          />
        </Pressable>
      </Pressable>
      <Text style={[styles.howAreYou, styles.howAreYouText]}>
        how are you feeling today?
      </Text>
      <View
        style={[
          styles.bottomrectangle,
          styles.bottomiconsPosition,
          styles.card2ChildBg,
        ]}
      />
      <Text style={[styles.welcomeBack, styles.howAreYouText]}>
        welcome back
      </Text>
      <View style={[styles.bottomiconsWrapper, styles.bottomiconsLayout]}>
        <View style={[styles.bottomiconsLayout, styles.bottomiconsPosition]}>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorIconPosition,
              styles.iconItemLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.vector, styles.vectorIconPosition]}
            onPress={() => navigation.navigate("MusicPlayer")}
          >
            <Image
              style={[styles.icon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector1, styles.vectorIconPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={[styles.icon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vectorIcon1,
              styles.vectorIconPosition,
              styles.iconItemLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardPosition2: {
    top: "53.11%",
    bottom: "0%",
  },
  cardLayout: {
    width: "47.46%",
    height: "46.89%",
    position: "absolute",
  },
  card2ChildBg: {
    backgroundColor: Color.gray_100,
    position: "absolute",
  },
  gameTypo: {
    textAlign: "left",
    color: Color.lightsteelblue,
    fontSize: FontSize.size_2xl,
    left: "11.65%",
    top: "8.29%",
    height: "30.76%",
    position: "absolute",
  },
  cardPosition1: {
    bottom: "53.11%",
    top: "0%",
  },
  howAreYouText: {
    color: Color.white,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  bottomiconsPosition: {
    bottom: 0,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  bottomiconsLayout: {
    height: 34,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "23.53%",
    width: "8.39%",
    height: "76.47%",
    top: "0%",
    position: "absolute",
  },
  androidLarge6Child: {
    left: "0%",
    position: "absolute",
  },
  androidLarge6Item: {
    left: "0%",
    position: "absolute",
  },
  card2Child: {
    borderRadius: Border.br_lg,
    left: "0%",
  },
  game: {
    width: "70.5%",
  },
  card2Item: {
    height: "10.1%",
    width: "11.83%",
    top: "78.28%",
    right: "13.61%",
    bottom: "11.62%",
    left: "74.56%",
    position: "absolute",
  },
  card2Inner: {
    height: "0.57%",
    width: "77.02%",
    top: "37.09%",
    right: "11.49%",
    bottom: "62.34%",
    left: "11.49%",
    borderStyle: "solid",
    borderColor: "#96b5c7",
    borderTopWidth: 1,
    position: "absolute",
  },
  musicalNote1Icon: {
    height: "30.94%",
    width: "36.25%",
    top: "49.72%",
    right: "32.03%",
    bottom: "19.34%",
    left: "31.72%",
    position: "absolute",
  },
  card2: {
    right: "52.54%",
    left: "0%",
  },
  chat: {
    width: "59.28%",
  },
  card3: {
    right: "52.23%",
    left: "0.31%",
  },
  music: {
    width: "72.1%",
  },
  cardPosition: {
    left: "52.54%",
    width: "47.46%",
    height: "46.89%",
    right: "0%",
    position: "absolute",
  },
  meet: {
    width: "63.29%",
  },
  card2Parent: {
    height: "47%",
    width: "85.28%",
    top: "29.62%",
    right: "7.22%",
    bottom: "23.38%",
    left: "7.5%",
    position: "absolute",
  },
  howAreYou: {
    height: "5.87%",
    width: "78.89%",
    top: "13.88%",
    left: "9.44%",
    fontSize: FontSize.size_xs,
    fontWeight: "900",
  },
  bottomrectangle: {
    height: 59,
  },
  welcomeBack: {
    height: "4.6%",
    width: "72.88%",
    top: "9.25%",
    left: "9.72%",
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  vectorIcon: {
    right: "91.61%",
    left: "0%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "29.45%",
    right: "62.16%",
  },
  vector1: {
    left: "60.48%",
    right: "31.13%",
  },
  vectorIcon1: {
    right: "1.99%",
    left: "89.62%",
  },
  bottomiconsWrapper: {
    width: "88.33%",
    right: "5.83%",
    bottom: 11,
    left: "5.83%",
  },
  androidLarge6: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge6;
