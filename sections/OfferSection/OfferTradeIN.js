import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./Offers.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card, ListItem, Icon } from "react-native-elements";

import Footer from "../../Footer/Footer";

export default function OfferCredit() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scrollCenter}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <Card.Image
                style={styles.cardImage}
                source={require("../../images/offer_m6_1800x900.jpg")}
              ></Card.Image>
            </View>
            <View style={styles.col2}>
              <Text style={styles.text}>MAZDA ТРЕЙД-ИН</Text>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                  marginTop: 10,
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
                    marginRight: 10,
                  }}
                  titleStyle={{
                    color: "white",
                    fontSize: 9,
                    fontFamily: "Segoe UI",
                    fontWeight: "600",
                  }}
                  onPress={() =>
                    (location.href =
                      "https://www.mazda.ru/buying/trade-in/?_ga=2.9738301.947919830.1637669333-2090533404.1637321990")
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
