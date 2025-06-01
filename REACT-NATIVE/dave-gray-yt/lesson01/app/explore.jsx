import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TabTwoScreen() {
  return (
    <View>
      <Text style={styles.title}>contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
});
