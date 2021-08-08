import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TaskDetails({ route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.taskDetailsWrapper}>
      <Text style={styles.taskTitle}>{item.task}</Text>
      <View style={styles.detailsContentWrapper}>
        <MaterialIcons name="waves" size={24} color="#55bcf6" />
        <Text style={styles.detailsText}>{item.details}</Text>
      </View>
      {/* timestamp */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  taskDetailsWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  taskTitle: {
    fontSize: 26,
    paddingBottom: 20,
  },
  detailsContentWrapper: {
    flexDirection: "row",
  },
  detailsText: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
