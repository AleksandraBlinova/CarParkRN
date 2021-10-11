import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

export default NavBar = (props) => (
  <ScrollView>
    <Text style={styles.text}>МЕНЮ</Text>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 38,
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 40,
  },
  container: {
    flex: 1,
  },
});
