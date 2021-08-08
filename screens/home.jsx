import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// components
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

// @warning Button with elevation makes weird shadow opacity
export default function Home({
  navigation,
  handleAddTask,
  taskItems,
  toggleModal,
  setToggleModal,
}) {
  return (
    <View style={styles.container}>
      {/* list of tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          <FlatList
            data={taskItems}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskDetails", { item })}
              >
                <Task text={item.task} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* write a task */}
      <TaskForm
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        handleAddTask={handleAddTask}
      />
      <TouchableOpacity
        style={styles.addWrapper}
        onPress={() => setToggleModal(true)}
      >
        <View style={styles.addButton}>
          <MaterialIcons name="add" size={26} color="#55bcf6" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    flex: 1,
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  addWrapper: {
    position: "absolute",
    right: 20,
    bottom: 30,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
