import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "../screens/home";
import TaskDetails from "../screens/taskDetails";
import HomeHeader from "../components/HomeHeader";
import DetailsHeader from "../components/DetailsHeader";

const Stack = createNativeStackNavigator();

// @warning Use react context for passing states
// see react-navigation docs
export default function HomeStack({
  taskItems,
  handleAddTask,
  handleRemoveTask,
  toggleModal,
  setToggleModal,
}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShadowVisible: false, headerTintColor: "#55bcf6" }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerStyle: {
            backgroundColor: "#e8eaed",
          },
          headerTitle: () => <HomeHeader />,
        }}
      >
        {(props) => (
          <Home
            {...props}
            handleAddTask={handleAddTask}
            taskItems={taskItems}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 40,
          },
          header: (props) => (
            <DetailsHeader {...props} handleRemoveTask={handleRemoveTask} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
