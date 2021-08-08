import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// @warning TouchableNativeFeedback only supports Android
export default function DetailsHeader({ navigation, route, handleRemoveTask }) {
  const { item } = route.params;

  const handlePress = () => {
    handleRemoveTask(item.key);
    navigation.goBack();
  };

  return (
    <View style={styles.headerWrapper}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#40000016", true)}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.iconWrapper}>
          <MaterialIcons name="arrow-back" size={24} color="#55bcf6" />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#40000016", true)}
        onPress={handlePress}
      >
        <View style={styles.iconWrapper}>
          <MaterialIcons name="delete" size={24} color="#55bcf6" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 3,
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
});
