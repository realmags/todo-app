// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import Task from "./components/Tasks";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([
    { key: "1", text: "Buy dog food 🐶" },
    { key: "2", text: "Feed cat 🐱" },
    { key: "3", text: "Eat apple 🍎" },
  ]);

  const handleAddTask = () => {
    const newTaskItem = { key: `${Math.random()}`, text: task };
    Keyboard.dismiss();
    setTaskItems([...taskItems, newTaskItem]);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <FlatList
            data={taskItems}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Task text={item.text} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(value) => setTask(value)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    flex: 1,
    marginTop: 30,
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
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
