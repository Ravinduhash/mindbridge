import * as React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={[styles.greenForest1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/green-forest-1.png")}
      />
      <ImageBackground
        style={[
          styles.loginChild,
          styles.loginChildPosition,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle242.png")}
      />
      <Image
        style={[styles.loginItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Text style={[styles.mindbridge, styles.mindbridgeTypo]}>MindBridge</Text>
      <View style={styles.loginInner} />
      <TextInput
        style={[styles.username, styles.usernamePosition]}
        placeholder="Username"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.password, styles.usernamePosition]}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#000"
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.loginChild1, styles.lineViewPosition]} />
      <View style={styles.dontHaveAccountParent}>
        <Pressable
          style={styles.loginChildPosition}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={[styles.dontHaveAccount, styles.mindbridgeTypo]}
          >{`Don’t have account? `}</Text>
        </Pressable>
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles.dontHaveAccount, styles.mindbridgeTypo]}>
            Sign up
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.group131}
        onPress={() => navigation.navigate("AndroidLarge6")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-13-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  loginChildPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mindbridgeTypo: {
    textAlign: "left",
    color: Color.white,
    textTransform: "capitalize",
  },
  usernamePosition: {
    left: "17.22%",
    width: "67.5%",
    height: "4.63%",
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "15.14%",
    right: "15.14%",
    width: "69.72%",
    height: "0.13%",
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
  loginChild: {
    right: "0%",
    bottom: "0%",
  },
  loginItem: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  mindbridge: {
    height: "6.54%",
    marginLeft: -152,
    top: "15.74%",
    left: "50%",
    fontSize: FontSize.size_3xl,
    width: 304,
    position: "absolute",
  },
  loginInner: {
    height: "22.28%",
    width: "80.34%",
    top: "33.48%",
    right: "9.83%",
    bottom: "44.24%",
    left: "9.83%",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.white,
  },
  username: {
    top: "37.5%",
  },
  password: {
    top: "44.13%",
  },
  lineView: {
    top: "41.9%",
    bottom: "57.98%",
  },
  loginChild1: {
    top: "48.55%",
    bottom: "51.32%",
  },
  dontHaveAccount: {
    fontSize: FontSize.size_2xs,
  },
  signUp: {
    left: "77.22%",
    top: "0%",
    position: "absolute",
  },
  dontHaveAccountParent: {
    height: "2.63%",
    width: "50%",
    top: "77%",
    right: "26.11%",
    bottom: "20.38%",
    left: "23.89%",
    position: "absolute",
  },
  group131: {
    left: "9.72%",
    top: "62%",
    right: "9.72%",
    bottom: "29.38%",
    width: "80.56%",
    height: "8.63%",
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Login;
