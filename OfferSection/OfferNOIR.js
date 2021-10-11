import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./Offers.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card, ListItem, Icon } from "react-native-elements";

import Footer from "../Footer/Footer";

export default function OfferNOIR() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          <>
            <Card.Image
              style={styles.cardImage}
              source={require("../images/photo5310252386469654944-3.jpg")}
            ></Card.Image>
            <View
              style={{
                justifyContent: "flex-end",
                alignContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button
                title="ПОДРОБНЕЕ"
                buttonStyle={{
                  backgroundColor: "black",
                  height: 28,
                  width: 106,
                  alignItems: "center",
                  borderRadius: 2,
                  marginRight: "10px",
                }}
                titleStyle={{
                  color: "white",
                  fontSize: 9,
                  fontFamily: "Segoe UI",
                  fontWeight: "bold",
                }}
              />
            </View>

            <Text style={styles.text}>СПЕЦИАЛЬНАЯ СЕРИЯ NOIR</Text>
          </>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
