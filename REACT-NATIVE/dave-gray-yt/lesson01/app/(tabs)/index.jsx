import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={icedCoffeeImg} style={styles.image}>
        <Text style={styles.text}>Coffee shop</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
