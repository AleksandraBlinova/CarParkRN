import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./CarsAvail.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Footer from "../../Footer/Footer";

export default function Contacts() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}></View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
