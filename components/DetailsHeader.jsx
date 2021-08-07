import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// todo: make feedback circular
export default function DetailsHeader() {
  return (
    // <View style={styles.headerWrapper}>
    <TouchableNativeFeedback style={styles.deleteButton}>
      <View style={styles.deleteWrapper}>
        <MaterialIcons name="delete" size={24} color="#55bcf6" />
      </View>
    </TouchableNativeFeedback>
    // </View>
  );
}

const styles = StyleSheet.create({
  deleteWrapper: {
    padding: 5,
    // width: 30,
    // height: 30,
    // borderColor: "#333",
    // borderWidth: 1,
    backgroundColor: "#333",
    // borderRadius: 100,
  },
  deleteButton: {
    borderRadius: 100,
    backgroundColor: "#333",
  },
});
