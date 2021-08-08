import React, { useState } from "react";
import { Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// components
import HomeStack from "./routes/homeStack";

// @todo Consider adding timestamp to each task item
// @todo Make whole app scrollable, not just flatlist
export default function App() {
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
    <NavigationContainer>
      <HomeStack
        taskItems={taskItems}
        handleAddTask={handleAddTask}
        handleRemoveTask={handleRemoveTask}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </NavigationContainer>
  );
}
