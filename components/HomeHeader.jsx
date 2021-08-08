import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>Today's Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: 40,
    paddingBottom: 20,
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
