import "react-native-gesture-handler";
import React from "react";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import AppNavigator from "./src/AppNavigator/AppNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  // if (!fontsLoaded) {
  // return <AppLoading />;
  // }
  return (
    <AppNavigator />
  );
}