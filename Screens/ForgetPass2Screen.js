import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const confusedGirl = require("../assets/images/Forgot password confused girl.gif");
const questionMarkBackground = require("../assets/images/Forgot password background.png");

const ForgetPass2Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={questionMarkBackground}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.gifContainer}>
          <Image
            source={confusedGirl}
            style={{ width: 390, height: 259 }}
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
        <View
          style={{
            flex: 1,
            height: 96,
            width: 292,
            marginLeft: 40,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 22, textAlign: "center" }}>
            Please check for the
          </Text>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
            reset link on your
          </Text>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
            registerd email address
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgetPass2Screen;

const styles = StyleSheet.create({});
