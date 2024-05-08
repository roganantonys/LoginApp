import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ route }) => {
  const { name } = route.params;
  return (
    <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={styles.container}>
      <Text style={styles.welcomeText}>Welcome {name}!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
