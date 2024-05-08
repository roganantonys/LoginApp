import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import Svg, {
//     Use,

//   } from 'react-native-svg';

const runningLogo = require("../assets/images/running.gif");
const key = require("../assets/images/key.png");
const pose1 = require("../assets/images/Female-Yoga-Pose-Silhouette-9.png");
const pose2 = require("../assets/images/stretch2.png");
const pose3 = require("../assets/images/Yoga-Pose-Silhouette.png");
const pose4 = require("../assets/images/Female-Yoga-Pose-Minus-Ground-Silhouette.png");

const ResetPassScreen = () => {
  const navigation = useNavigation();
  function buttonPressed() {
    console.warn("buttonPressed");
    navigation.navigate("Forget1");
  }
  function gotoLogin() {
    console.warn("LoginPressed");
  }
  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image
          source={runningLogo}
          style={{ width: 390, height: 297 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={key}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 35,
            left: 40,
            zIndex: 3,
          }}
          resizeMode="contain"
        />
        <TextInput
          type="password"
          style={styles.newPassword}
          placeholder="New Password"
          placeholderTextColor="#A7A7A7"
        />

        <Image
          source={key}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 105,
            left: 40,
            zIndex: 3,
          }}
          resizeMode="contain"
        />
        <TextInput
          type="password"
          style={styles.newPassword}
          placeholder="Conform Password"
          placeholderTextColor="#A7A7A7"
        />
        <Pressable style={styles.button} onPress={buttonPressed}>
          <Text style={styles.buttonText}>Reset</Text>
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
        <View Style={styles.footerImages}></View>
      </View>
      <View style={styles.yogaPoses}>
        <Image
          source={pose1}
          style={{ width: 89.5, height: 77.69 }}
          resizeMode="contain"
        />
        <Image
          source={pose2}
          style={{ width: 38, height: 105 }}
          resizeMode="contain"
        />
        <Image
          source={pose3}
          style={{ width: 95.27, height: 86.65 }}
          resizeMode="contain"
        />
        <Image
          source={pose4}
          style={{ width: 30.17, height: 151.28 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ResetPassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 165, 0, 0.39)',
  },

  contentContainer: {
    flex: 1,
  },
  newPasswordContainer: {
    flexDirection: "row",
  },
  newPassword: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 20,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "white",
    paddingHorizontal: 40,
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
  yogaPoses: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
