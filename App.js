const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Start from "./screens/Start";
import Gameview from "./screens/Gameview";
import Chatview from "./screens/Chatview";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Music from "./screens/Music";
import ChatCounselor from "./screens/ChatCounselor";
import CallCounselor from "./screens/CallCounselor";
import MeetCounselor from "./screens/MeetCounselor";
import MeetCallChat from "./screens/MeetCallChat";
import AndroidLarge6 from "./screens/AndroidLarge6";
import ChatScreen from "./screens/ChatScreen";
import MusicPlayer from "./screens/MusicPlayer";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Anton: require("./assets/fonts/Anton.ttf"),
    Anton_regular: require("./assets/fonts/Anton_regular.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Roboto_black: require("./assets/fonts/Roboto_black.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_black: require("./assets/fonts/Montserrat_black.ttf"),
    Anaheim: require("./assets/fonts/Anaheim.ttf"),
    Anaheim_regular: require("./assets/fonts/Anaheim_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gameview"
              component={Gameview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chatview"
              component={Chatview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Music"
              component={Music}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatCounselor"
              component={ChatCounselor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallCounselor"
              component={CallCounselor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetCounselor"
              component={MeetCounselor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetCallChat"
              component={MeetCallChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicPlayer"
              component={MusicPlayer}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
