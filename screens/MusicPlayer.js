import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MusicPlayer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.musicplayer}>
      <View
        style={[
          styles.blackbackground,
          styles.childPosition,
          styles.childLayout,
        ]}
      />
      <LinearGradient
        style={[
          styles.musicplayerChild,
          styles.musicplayerBg,
          styles.childPosition,
          styles.childLayout,
        ]}
        locations={[0, 0.51, 1]}
        colors={["#282424", "rgba(40, 36, 36, 0)", "#282424"]}
      />
      <LinearGradient
        style={[styles.musicplayerItem, styles.musicplayerBg]}
        locations={[0, 0.51, 1]}
        colors={["#282424", "rgba(40, 36, 36, 0)", "#282424"]}
      />
      <Pressable
        style={[styles.playlistsParent, styles.parentPosition]}
        onPress={() =>
          Linking.openURL("https://www.youtube.com/watch?v=R4b2BYGHtoI")
        }
      >
        <Text style={[styles.playlists, styles.playlistsTypo]}>Playlists</Text>
        <View
          style={[
            styles.tryToListen,
            styles.childPosition,
            styles.tryToListenLayout,
          ]}
        >
          <Image
            style={[
              styles.vinylDiscIcon,
              styles.iconLayout,
              styles.vinylIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vinyl-disc.png")}
          />
          <Image
            style={[
              styles.vinylDiscIcon1,
              styles.iconLayout,
              styles.vinylIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vinyl-disc1.png")}
          />
          <Image
            style={[
              styles.vinylDiscIcon2,
              styles.iconLayout,
              styles.vinylIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vinyl-disc2.png")}
          />
          <Text
            style={[
              styles.queen,
              styles.hersTypo,
              styles.hersTypo1,
              styles.hersLayout,
            ]}
          >
            Queen
          </Text>
          <Text
            style={[
              styles.billyIdol,
              styles.hersTypo,
              styles.hersTypo1,
              styles.hersLayout,
            ]}
          >
            Billy Idol
          </Text>
          <Text
            style={[
              styles.hers,
              styles.hersTypo,
              styles.hersTypo1,
              styles.hersLayout,
            ]}
          >
            Her’s
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.recommendedParent, styles.parentPosition]}
        onPress={() =>
          Linking.openURL("https://www.youtube.com/watch?v=OfpO-vNPB2A")
        }
      >
        <Text style={[styles.recommended, styles.playlistsTypo]}>
          recommended
        </Text>
        <View style={[styles.myPlaylists, styles.childPosition]}>
          <Image
            style={[styles.vinylDiscIcon3, styles.vinylIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vinyl-disc3.png")}
          />
          <Image
            style={[styles.vinylDiscIcon4, styles.vinylIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vinyl-disc4.png")}
          />
          <Text style={[styles.indieMusic, styles.hersTypo, styles.hersTypo1]}>
            Indie music
          </Text>
          <Text
            style={[styles.natureSoundsAnd, styles.hersTypo, styles.hersTypo1]}
          >
            Nature sounds and lo-fi
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.recentParent}
        onPress={() =>
          Linking.openURL("https://www.youtube.com/watch?v=zuvZYinUhww")
        }
      >
        <Text style={[styles.recent, styles.recentTypo]}>Recent</Text>
        <View
          style={[
            styles.recentlyPlayed,
            styles.childPosition,
            styles.tryToListenLayout,
          ]}
        >
          <View
            style={[
              styles.vinylDiscParent,
              styles.childPosition,
              styles.childLayout,
            ]}
          >
            <Image
              style={[styles.vinylDiscIcon5, styles.vinylIconLayout]}
              resizeMode="cover"
              source={require("../assets/vinyl-disc5.png")}
            />
            <Image
              style={[styles.vinylDiscIcon6, styles.vinylIconLayout]}
              resizeMode="cover"
              source={require("../assets/vinyl-disc6.png")}
            />
            <View style={styles.vinylDisc}>
              <Image
                style={[styles.vinylDiscChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-5.png")}
              />
            </View>
            <Text style={[styles.theLastShadow, styles.hersTypo]}>
              The Last Shadow
            </Text>
            <Text style={[styles.lowRoar, styles.lowRoarTypo]}>Low Roar</Text>
            <Text style={[styles.interpol, styles.lowRoarTypo]}>Interpol</Text>
          </View>
        </View>
      </Pressable>
      <Text
        style={[
          styles.findGameChill,
          styles.findGameChillPosition,
          styles.recentTypo,
        ]}
      >
        Find Game, CHILL with It!
      </Text>
      <View style={[styles.rectangleParent, styles.findGameChillPosition]}>
        <View
          style={[styles.groupChild, styles.childPosition, styles.childLayout]}
        />
        <Image
          style={[styles.iconlylightOutlinesearch, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinesearch.png")}
        />
        <TextInput
          style={styles.searchMusic}
          placeholder="Search Song"
          keyboardType="default"
        />
      </View>
      <View style={[styles.bottomiconsWrapper, styles.bottomiconsLayout]}>
        <View
          style={[
            styles.bottomicons,
            styles.bottomiconsLayout,
            styles.tryToListenLayout,
          ]}
        >
          <Pressable
            style={[styles.pressable, styles.iconPosition]}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={[styles.iconLayout, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/4.png")}
            />
          </Pressable>
          <Image
            style={[styles.icon1, styles.iconPosition, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/3.png")}
          />
          <Pressable
            style={[styles.pressable1, styles.iconPosition]}
            onPress={() => navigation.navigate("Chatview")}
          >
            <Image
              style={styles.childLayout}
              resizeMode="cover"
              source={require("../assets/2.png")}
            />
          </Pressable>
          <Image
            style={[styles.icon3, styles.iconPosition, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    left: "0%",
  },
  childLayout: {
    height: "100%",
    width: "100%",
  },
  musicplayerBg: {
    backgroundColor: "transparent",
    display: "none",
    position: "absolute",
  },
  parentPosition: {
    left: "6.61%",
    right: "6%",
    width: "87.39%",
    position: "absolute",
  },
  playlistsTypo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    top: "0%",
    position: "absolute",
  },
  tryToListenLayout: {
    width: "100%",
    right: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vinylIconPosition: {
    bottom: "29.04%",
    width: "33.94%",
    height: "70.96%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  hersTypo: {
    color: Color.gray_300,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  hersTypo1: {
    fontWeight: "700",
    color: Color.gray_300,
    fontSize: FontSize.size_3xs,
  },
  hersLayout: {
    height: "26.81%",
    fontWeight: "700",
  },
  vinylIconLayout1: {
    bottom: "23.76%",
    width: "51.77%",
    height: "76.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  recentTypo: {
    textAlign: "left",
    color: Color.white,
    textTransform: "capitalize",
  },
  vinylIconLayout: {
    bottom: "20.59%",
    width: "36.64%",
    height: "79.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  lowRoarTypo: {
    height: "13.73%",
    color: Color.gray_300,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  findGameChillPosition: {
    left: "6.67%",
    position: "absolute",
  },
  bottomiconsLayout: {
    height: 26,
    position: "absolute",
  },
  iconPosition: {
    width: "8.27%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  blackbackground: {
    backgroundColor: "#211d1d",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  musicplayerChild: {
    left: "0%",
    right: "0%",
    top: "0%",
  },
  musicplayerItem: {
    top: 0,
    left: 0,
    width: 360,
    height: 808,
  },
  playlists: {
    height: "21.51%",
    width: "59.42%",
    left: "3.09%",
  },
  vinylDiscIcon: {
    right: "67.33%",
    left: "-1.27%",
  },
  vinylDiscIcon1: {
    right: "33.13%",
    left: "32.93%",
  },
  vinylDiscIcon2: {
    right: "-2.54%",
    left: "68.6%",
  },
  queen: {
    width: "11.04%",
    top: "69.45%",
    left: "0%",
  },
  billyIdol: {
    width: "14.83%",
    top: "70.95%",
    left: "34.2%",
  },
  hers: {
    width: "8.83%",
    top: "73.19%",
    left: "69.87%",
  },
  tryToListen: {
    height: "78.46%",
    top: "21.54%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  playlistsParent: {
    height: "23.77%",
    top: "46.11%",
    bottom: "30.13%",
  },
  recommended: {
    height: "18.33%",
    width: "99.17%",
    left: "0.83%",
  },
  vinylDiscIcon3: {
    right: "49.87%",
    left: "-1.65%",
  },
  vinylDiscIcon4: {
    right: "-3.29%",
    left: "51.52%",
  },
  indieMusic: {
    height: "10.99%",
    width: "24.1%",
    top: "73.02%",
    left: "0%",
  },
  natureSoundsAnd: {
    height: "25.01%",
    width: "38.29%",
    top: "74.99%",
    left: "53.2%",
  },
  myPlaylists: {
    height: "81.53%",
    width: "77.19%",
    top: "18.47%",
    right: "22.81%",
    left: "0%",
    position: "absolute",
  },
  recommendedParent: {
    height: "17.66%",
    top: "69.84%",
    bottom: "12.5%",
  },
  recent: {
    height: "17.99%",
    width: "29.38%",
    left: "3.22%",
    fontSize: FontSize.size_xs,
    top: "0%",
    position: "absolute",
  },
  vinylDiscIcon5: {
    right: "64.64%",
    left: "-1.27%",
  },
  vinylDiscIcon6: {
    right: "27.38%",
    left: "35.99%",
  },
  vinylDiscChild: {
    height: "111.68%",
    width: "110.66%",
    right: "-5.33%",
    bottom: "-11.68%",
    left: "-5.33%",
    top: "0%",
    position: "absolute",
  },
  vinylDisc: {
    height: "71.11%",
    width: "23.88%",
    bottom: "28.89%",
    left: "76.12%",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  theLastShadow: {
    height: "23.53%",
    width: "24.8%",
    top: "76.47%",
    color: Color.gray_300,
    fontSize: FontSize.size_3xs,
    left: "0%",
  },
  lowRoar: {
    width: "16.22%",
    top: "78.43%",
    left: "37.2%",
  },
  interpol: {
    width: "13.35%",
    top: "81.37%",
    left: "76%",
  },
  vinylDiscParent: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  recentlyPlayed: {
    height: "78.5%",
    top: "21.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  recentParent: {
    height: "19.18%",
    width: "87.34%",
    top: "24.82%",
    right: "6.02%",
    bottom: "56%",
    left: "6.64%",
    position: "absolute",
  },
  findGameChill: {
    height: "5.6%",
    width: "89.55%",
    top: "7.25%",
    fontSize: FontSize.size_base,
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "#f1f1f1",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    height: "51.95%",
    width: "8.05%",
    top: "23.94%",
    right: "87.18%",
    bottom: "24.11%",
    left: "4.78%",
    position: "absolute",
  },
  searchMusic: {
    height: "63.84%",
    width: "80.25%",
    top: "17.96%",
    left: "15.92%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.27%",
    width: "87.22%",
    top: "15%",
    bottom: "78.73%",
    right: "6.11%",
  },
  pressable: {
    right: "91.73%",
    left: "0%",
  },
  icon1: {
    right: "62.68%",
    left: "29.05%",
  },
  pressable1: {
    left: "60.27%",
    right: "31.46%",
  },
  icon3: {
    right: "2.1%",
    left: "89.63%",
  },
  bottomicons: {
    bottom: 0,
    left: "0%",
    right: "0%",
  },
  bottomiconsWrapper: {
    width: "89.57%",
    bottom: 15,
    left: "4.32%",
    right: "6.11%",
  },
  musicplayer: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MusicPlayer;
