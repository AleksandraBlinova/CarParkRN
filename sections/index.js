import React from "react";
import Section from "./Section";
import HomePage from "./HomeSection/HomePage";
import { StyleSheet, Text, View, Image } from "react-native";

export function HomeSection({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export const OffersSection = ({ navigation }) => (
  <Section navigation={navigation} name="Offers" />
);

export const AvailableCarsSection = ({ navigation }) => (
  <Section navigation={navigation} name="Available cars" />
);
export const ContactsSection = ({ navigation }) => (
  <Section navigation={navigation} name="Contacts" />
);
