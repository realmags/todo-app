import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "../screens/home";
import TaskDetails from "../screens/taskDetails";
import HomeHeader from "../components/HomeHeader";
import DetailsHeader from "../components/DetailsHeader";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShadowVisible: false, headerTintColor: "#55bcf6" }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#e8eaed",
          },
          headerTitle: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitle: "",
          headerRight: () => <DetailsHeader />,
        }}
      />
    </Stack.Navigator>
  );
}
