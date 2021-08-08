import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// components
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

// todo: edit weird shadow of button
export default function Home({ navigation }) {
  const [taskItems, setTaskItems] = useState([
    { key: "1", task: "Buy dog food 🐶", details: "No hay dog" },
    { key: "2", task: "Feed cat 🐱", details: "Miming is always hungry" },
    { key: "3", task: "Eat apple 🍎", details: "Keep the doctor away" },
  ]);
  const [toggleModal, setToggleModal] = useState(false);

  const handleAddTask = (taskInput) => {
    const newTaskItem = { ...taskInput, key: Math.random().toString() };
    Keyboard.dismiss();
    setToggleModal(false);
    setTaskItems((prevTaskItems) => [...prevTaskItems, newTaskItem]);
  };

  const handleRemoveTask = (key) => {
    setTaskItems((prevTaskItems) =>
      prevTaskItems.filter((item) => item.key !== key)
    );
  };

  return (
    <View style={styles.container}>
      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
        {/* <Text style={styles.sectionTitle}>Today's Tasks</Text> */}
        <View style={styles.items}>
          <FlatList
            data={taskItems}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TaskDetails", { item, handleRemoveTask })
                }
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
    // paddingTop: 80,
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
    // test
    // backgroundColor: "#fff",
    // borderRadius: 60,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    // ! weird shadow border
    // elevation: 1,
    // shadowOffset: { width: 1, height: -2 },
    // shadowOpacity: 0.6,
    // shadowRadius: 60,
    // shadowColor: "#c0c0c0",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
