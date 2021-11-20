import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
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
        <View>
          {cars.map((car) => (
            <View key={car.id}>
              <Text style={styles.text}>{car.model}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginHorizontal: -5,
                }}
              >
                <IconButton
                  icon="circle"
                  size={28}
                  color={car.color}
                  style={{ marginHorizontal: 5 }}
                />
                <IconButton
                  icon="circle"
                  size={28}
                  color={car.color2}
                  style={{ marginHorizontal: -10 }}
                />
                <IconButton icon="circle" size={28} color={car.color3} />
              </View>
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
