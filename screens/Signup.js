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

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <Image
        style={[styles.greenForest1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/green-forest-11.png")}
      />
      <ImageBackground
        style={[
          styles.signupChild,
          styles.signupChildPosition,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle241.png")}
      />
      <Image
        style={[styles.signupItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-311.png")}
      />
      <Text style={[styles.mindbridge, styles.mindbridgeTypo]}>MindBridge</Text>
      <View style={styles.signupInner} />
      <TextInput
        style={[styles.username, styles.usernamePosition]}
        placeholder="User name"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.registrationNo}
        placeholder="Registration No"
        keyboardType="number-pad"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.password, styles.usernamePosition]}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#000"
      />
      <View
        style={[
          styles.lineView,
          styles.signupChildLayout,
          styles.lineViewPosition,
        ]}
      />
      <View
        style={[
          styles.signupChild1,
          styles.signupChildLayout,
          styles.signupChildLayout1,
        ]}
      />
      <View
        style={[
          styles.signupChild2,
          styles.signupChildLayout,
          styles.signupChildLayout1,
        ]}
      />
      <View
        style={[
          styles.signupChild3,
          styles.signupChildLayout,
          styles.lineViewPosition,
        ]}
      />
      <View style={styles.doYouHaveAccountParent}>
        <Pressable
          style={styles.signupChildPosition}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={[styles.doYouHaveAccount, styles.mindbridgeTypo]}
          >{`Do you have account? `}</Text>
        </Pressable>
        <Pressable
          style={styles.signIn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.doYouHaveAccount, styles.mindbridgeTypo]}>
            Sign In
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.group141}
        onPress={() => navigation.navigate("AndroidLarge6")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-14-1.png")}
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
  signupChildPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mindbridgeTypo: {
    color: Color.white,
    textTransform: "capitalize",
  },
  usernamePosition: {
    left: "17.33%",
    width: "63.92%",
    position: "absolute",
  },
  signupChildLayout: {
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: "67.15%",
    height: "0.13%",
    position: "absolute",
  },
  lineViewPosition: {
    left: "16.32%",
    right: "16.53%",
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: "67.15%",
    height: "0.13%",
  },
  signupChildLayout1: {
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: "67.15%",
    height: "0.13%",
  },
  greenForest1Icon: {
    top: 157,
    right: -4,
    bottom: 106,
    left: -5,
    display: "none",
    position: "absolute",
  },
  signupChild: {
    right: "0%",
    bottom: "0%",
  },
  signupItem: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  mindbridge: {
    height: "6.54%",
    marginLeft: -151.62,
    top: "15.74%",
    left: "50%",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    width: 304,
    position: "absolute",
  },
  signupInner: {
    height: "32.82%",
    width: "80.34%",
    top: "33.48%",
    right: "9.83%",
    bottom: "33.7%",
    left: "9.83%",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.white,
  },
  username: {
    top: "37.5%",
  },
  email: {
    width: "65.54%",
    top: "50%",
    left: "17.6%",
    position: "absolute",
  },
  registrationNo: {
    top: "44.12%",
    left: "17.09%",
    position: "absolute",
  },
  password: {
    top: "56.63%",
  },
  lineView: {
    top: "41.9%",
    bottom: "57.98%",
  },
  signupChild1: {
    top: "54.43%",
    right: "16.32%",
    bottom: "45.45%",
    left: "16.53%",
  },
  signupChild2: {
    top: "48.55%",
    right: "16.74%",
    bottom: "51.32%",
    left: "16.1%",
  },
  signupChild3: {
    top: "61.08%",
    bottom: "38.8%",
  },
  doYouHaveAccount: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  signIn: {
    left: "81.64%",
    top: "0%",
    position: "absolute",
  },
  doYouHaveAccountParent: {
    height: "2.63%",
    width: "56.06%",
    top: "80.88%",
    right: "23.63%",
    bottom: "16.5%",
    left: "20.31%",
    position: "absolute",
  },
  group141: {
    left: "10.83%",
    top: "69.25%",
    right: "10.63%",
    bottom: "22.13%",
    width: "78.54%",
    height: "8.63%",
    position: "absolute",
  },
  signup: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Signup;
