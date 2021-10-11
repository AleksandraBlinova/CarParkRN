import React from "react";
import { View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Menu from "./Menu/Menu";

export default function App() {
  return (
    <>
      <Menu />
    </>
  );
}
