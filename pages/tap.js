import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Playing from "./pages/nowplay";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Playing" component={Playing} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
