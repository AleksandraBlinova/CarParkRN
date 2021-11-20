import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./CarsAvail.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "../../Footer/Footer";
import { db } from "../../db/firestore";

const CarsAvail = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    db.collection("automobile")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          price: doc.data().price,
          releaseYear: doc.data().releaseYear,
          model: doc.data().model,
          imageURL: doc.data().imageURL,
          color: doc.data().color,
          color2: doc.data().color2,
          color3: doc.data().color3,
        }))
      )
      .then((cars) => setCars(cars));
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          {cars.map((car) => (
            <View key={car.id} style={styles.text}>
              <Text style={styles.text}>{car.model}</Text>
              <div>
                <MaterialCommunityIcons
                  name="circle"
                  size={28}
                  color={car.color}
                  style={styles.colorIcon}
                />
                <MaterialCommunityIcons
                  name="circle"
                  size={28}
                  color={car.color2}
                  style={styles.colorIcon}
                />
                <MaterialCommunityIcons
                  name="circle"
                  size={28}
                  color={car.color3}
                  style={styles.colorIcon}
                />
              </div>
              <Text style={styles.finishText}></Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
};

export default CarsAvail;
