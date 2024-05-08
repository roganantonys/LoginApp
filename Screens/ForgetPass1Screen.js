import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const confusedGirl = require("../assets/images/Forgot password confused girl.gif");
const email = require("../assets/images/email.png");
const questionMarkBackground = require("../assets/images/Forgot password background.png");

const ForgetPass1Screen = () => {
  const navigation = useNavigation();

  function sendPressed() {
    console.warn("send Pressed");
    navigation.navigate("Forget2");
  }
  function gotoLogin() {
    console.warn("LoginPressed");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ImageBackground
        source={questionMarkBackground}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >

      
      <View style={styles.gifContainer}>
        <Image
          source={confusedGirl}
          style={{ width: 390, height: 297 }}
          resizeMode="cover"
        />
      </View>
      <Text
        style={{
          marginLeft: 64,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Forgot Your Password
      </Text>
      <Text
        style={{
          marginLeft: 69,
          marginTop: 20,
          fontWeight: "semibold",
          fontSize: 17,
          color: "#110101",
        }}
      >
        Enter your email address below
      </Text>
      <Text
        style={{
          fontWeight: "semibold",
          fontSize: 17,
          color: "#110101",
          textAlign: "center",
        }}
      >
        to reset your password
      </Text>
      <View style={styles.emailContainer}>
        <Image
          source={email}
          style={{ width: 20, height: 20, marginTop: 57, left: 50, zIndex: 3 }}
          resizeMode="contain"
        />

        <TextInput
          type="Email"
          style={styles.emailStyle}
          placeholder="Email"
          placeholderTextColor="#A7A7A7"
        />
      </View>
      <Pressable style={styles.button} onPress={sendPressed}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
      <Pressable
        onPress={gotoLogin}
        style={{
          flexDirection: "row",
          width: 195,
          height: 36,
          marginTop: 20,
          marginLeft: 100,
        }}
      >
        <Text style={{ fontSize: 18 }}>Go back to</Text>
        <Text style={{ color: "#E91717", fontSize: 18 }}> Login Page</Text>
      </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgetPass1Screen;

const styles = StyleSheet.create({
  emailContainer: {
    flexDirection: "row",
  },
  emailStyle: {
    marginLeft: 20,
    marginTop: 40,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 45,
    fontFamily: "Nunito",
  },
  button: {
    marginTop: 40,
    marginLeft: 90,
    width: 202,
    height: 45,
    backgroundColor: "#000000",
    borderRadius: 82,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    marginTop: 6,
    fontSize: 20,
  },
});
