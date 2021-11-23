import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { IconButton, Button } from "react-native-paper";
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

  const [flag, setFlag] = useState(0, 1, 2);

  const ChangeFlag = (newValue) => {
    setFlag(newValue);
  };

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          {cars.map((car) => (
            <Card key={car.id}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 30,
                  marginBottom: 0,
                  textAlign: "center",
                }}
              >
                {car.model}
              </Text>

              <Image
                style={{ marginLeft: 30, height: 150, width: 250 }}
                source={(() => {
                  if (flag === 0) {
                    return require(`../../images/${car.imageURL}.png`);
                  } else if (flag === 1) {
                    return require(`../../images/${car.imageURL2}.png`);
                  } else {
                    return require(`../../images/${car.imageURL3}.png`);
                  }
                })()}
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
                  onPress={() => {
                    ChangeFlag(0);
                  }}
                />
                <IconButton
                  icon="circle"
                  size={28}
                  color={car.color2}
                  style={{ marginHorizontal: -10 }}
                  onPress={() => {
                    ChangeFlag(1);
                  }}
                />
                <IconButton
                  icon="circle"
                  size={28}
                  color={car.color3}
                  onPress={() => {
                    ChangeFlag(2);
                  }}
                />
              </View>

              <Text style={styles.finishText}></Text>
            </Card>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
};

export default CarsAvail;
