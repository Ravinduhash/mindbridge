import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Music = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.music}>
      <View style={[styles.musicChild, styles.musicPosition]} />
      <Image
        style={[
          styles.musicItem,
          styles.iconLayout1,
          styles.iconLayout2,
          styles.musicPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={[styles.backgroundIcon, styles.playChildPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={[styles.backgroundIcon, styles.playChildPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <Text style={styles.borderline}>Borderline</Text>
      <Text style={[styles.tameImpala, styles.lyricsTypo]}>Tame Impala</Text>
      <Text style={[styles.lyrics, styles.lyricsPosition, styles.lyricsTypo]}>
        Lyrics
      </Text>
      <Image
        style={[styles.heartIcon, styles.heartIconPosition]}
        resizeMode="cover"
        source={require("../assets/heart.png")}
      />
      <Image
        style={[
          styles.discIcon,
          styles.discIconPosition,
          styles.iconLayout1,
          styles.iconLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/disc.png")}
      />
      <Image
        style={[styles.interfaceShareByStreamlineh, styles.heartIconPosition]}
        resizeMode="cover"
        source={require("../assets/interface-share-by-streamlinehq.png")}
      />
      <Image
        style={[
          styles.interfaceArrowsButtonLeftB,
          styles.lyricsPosition,
          styles.iconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/interface-arrows-button-left-by-streamlinehq.png")}
      />
      <Pressable style={styles.play} onPress={() => {}}>
        <Image
          style={[styles.discIconPosition, styles.playChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={[styles.playIcon, styles.iconLayout1, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/play.png")}
        />
      </Pressable>
      <View style={styles.progress} />
      <Image
        style={[styles.fastforwardIcon, styles.fastforwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/fastforward.png")}
      />
      <Image
        style={[styles.fastforwardIcon1, styles.fastforwardIconLayout]}
        resizeMode="cover"
        source={require("../assets/fastforward1.png")}
      />
      <Image
        style={[styles.shuffleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/shuffle.png")}
      />
      <Image
        style={[styles.repeatIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/repeat.png")}
      />
      <View style={[styles.bottomiconsWrapper, styles.bottomiconsLayout]}>
        <View
          style={[
            styles.bottomicons,
            styles.bottomiconsLayout,
            styles.discIconPosition,
          ]}
        >
          <Pressable
            style={[styles.vector, styles.vectorPosition]}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector1, styles.vectorPosition]}
            onPress={() => navigation.navigate("MusicPlayer")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.vector2, styles.vectorPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorPosition,
              styles.iconLayout1,
              styles.iconLayout2,
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
  musicPosition: {
    display: "none",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconLayout2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  playChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lyricsTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  lyricsPosition: {
    left: "50%",
    position: "absolute",
  },
  heartIconPosition: {
    top: 63,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  discIconPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  fastforwardIconLayout: {
    bottom: "25.63%",
    top: "69.37%",
    width: "11.92%",
    height: "5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    top: "70%",
    width: "8.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bottomiconsLayout: {
    height: 26,
    position: "absolute",
  },
  vectorPosition: {
    width: "8.4%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  musicChild: {
    top: 691,
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: Color.whitesmoke_100,
    width: 393,
    height: 158,
  },
  musicItem: {
    height: "3.25%",
    width: "80.56%",
    top: "94.62%",
    right: "9.72%",
    bottom: "2.13%",
    left: "9.72%",
  },
  backgroundIcon: {
    width: "100.56%",
    right: "-0.56%",
    left: "0%",
  },
  borderline: {
    top: 55,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    left: 26,
    position: "absolute",
  },
  tameImpala: {
    top: 83,
    color: Color.white,
    left: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lyrics: {
    marginLeft: -22,
    top: "86%",
    color: Color.gray_300,
  },
  heartIcon: {
    width: "9.29%",
    right: "22.3%",
    left: "68.41%",
    height: 34,
  },
  discIcon: {
    height: "50.87%",
    top: "15.62%",
    bottom: "33.5%",
    position: "absolute",
  },
  interfaceShareByStreamlineh: {
    width: "8.33%",
    right: "7.78%",
    left: "83.89%",
    height: 30,
  },
  interfaceArrowsButtonLeftB: {
    height: "3%",
    marginLeft: -7,
    top: "83%",
    bottom: "14%",
    width: 24,
  },
  playIcon: {
    height: "55.46%",
    width: "54.96%",
    top: "25.15%",
    right: "18.24%",
    bottom: "19.39%",
    left: "26.8%",
    position: "absolute",
  },
  play: {
    height: "10.12%",
    width: "23.33%",
    top: "66.25%",
    right: "38.33%",
    bottom: "23.63%",
    left: "38.33%",
    position: "absolute",
  },
  progress: {
    width: "124.17%",
    top: "58.87%",
    right: "-11.94%",
    bottom: "37.13%",
    left: "-12.22%",
    height: "4%",
    position: "absolute",
  },
  fastforwardIcon: {
    right: "67.24%",
    left: "20.83%",
  },
  fastforwardIcon1: {
    right: "20.85%",
    left: "67.22%",
  },
  shuffleIcon: {
    right: "5.83%",
    bottom: "26%",
    left: "85.28%",
    height: "4%",
  },
  repeatIcon: {
    height: "3.74%",
    right: "85.28%",
    bottom: "26.26%",
    left: "5.83%",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    right: "91.6%",
    left: "0%",
  },
  vector1: {
    left: "29.19%",
    right: "62.41%",
  },
  vector2: {
    left: "60.27%",
    right: "31.33%",
  },
  vectorIcon: {
    right: "1.82%",
    left: "89.78%",
  },
  bottomicons: {
    bottom: 0,
  },
  bottomiconsWrapper: {
    width: "88.18%",
    right: "5.99%",
    bottom: 22,
    left: "5.83%",
  },
  music: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Music;
