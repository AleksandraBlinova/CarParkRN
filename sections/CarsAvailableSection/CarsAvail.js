import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "./CarsAvail.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "../../Footer/Footer";
import { db } from "../../db/firestore";
import { Card } from "react-native-elements";

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
          imageURL2: doc.data().imageURL2,
          imageURL3: doc.data().imageURL3,
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
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 30,
                  marginBottom: 10,
                  textAlign: "center",
                }}
              >
                {car.model}
              </Text>
              <Image
                id="imgId"
                style={{ marginLeft: 50, height: 150, width: 250 }}
                source={require(`../../images/${car.imageURL}.png`)}
                onPress={() => {
                  this.source = `../../images/${car.imageURL2}.png`;
                }}
              ></Image>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  icon="circle"
                  size={28}
                  color={car.color}
                  style={{ marginHorizontal: 4 }}
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
