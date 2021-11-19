import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./CarsAvail.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Footer from "../../Footer/Footer";
import db from "../../db/firestore";

const CarsAvail = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    db.collection("automobile")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          price: doc.data().price,
          releaseYear: doc.data().releaseYear,
        }))
      )
      .then((cars) => setCars(cars));
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          {cars.map((car) => (
            <View style={styles.text}>
              <Text>{car.price}</Text>
              <Text>{car.releaseYear}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
};

export default CarsAvail;
