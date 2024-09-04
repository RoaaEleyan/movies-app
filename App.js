import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/Stack";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
