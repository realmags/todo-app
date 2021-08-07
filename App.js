// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

// components
import HomeStack from "./routes/homeStack";

// todo: make whole app scrollable, not just flatlist
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
