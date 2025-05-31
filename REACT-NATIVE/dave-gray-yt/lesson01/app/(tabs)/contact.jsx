import { StyleSheet, Text, View } from "react-native";
import React from "react";

const contact = () => {
  return (
    <View>
      <Text style={styles.title}>contact</Text>
    </View>
  );
};

export default contact;

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
