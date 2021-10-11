import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./Offers.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card, ListItem, Icon } from "react-native-elements";

import Footer from "../Footer/Footer";
import OfferCredit from "./OfferCredit";
import OfferTradeIN from "./OfferTradeIN";
import OfferNOIR from "./OfferNOIR";

export default function Offers() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          <Text style={styles.header}>ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ</Text>
          <>
            <OfferCredit />
            <OfferTradeIN />
            <OfferNOIR />
          </>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
