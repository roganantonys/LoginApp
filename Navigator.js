import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPass1Screen from "./Screens/ForgetPass1Screen";
import ForgetPass2Screen from "./Screens/ForgetPass2Screen";
import ResetPassScreen from "./Screens/ResetPassScreen";
import LoginScreen from "./TestScreens/LoginScreen";
import HomeScreen from "./TestScreens/HomeScreen";

const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        {/* <stack.Screen name="ResetScreen" component={ResetPassScreen} />
        <stack.Screen name="Forget1" component={ForgetPass1Screen} />
        <stack.Screen name="Forget2" component={ForgetPass2Screen} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
