import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.view}>
          <Image
            source={require("../../images/image_interior_1800x900.jpg")}
            style={styles.topimage}
          />
          <Text style={styles.header}>О КОМПАНИИ</Text>
          <Text style={styles.text}>
            Mazda Москва и Mazda Санкт-Петербург-официальные дилеры Mazda в
            России. Входят в состав автомобильного холдинга АО «MazdaHome».
          </Text>
          <Text style={styles.text}>
            Создавая новую Mazda, мы никогда не делаем кардинальных перемен, но
            всегда вносим заметные и важные изменения
          </Text>
          <Text style={styles.textFinal}>
            Каждое обновление модели – это развитие лучших ее качеств. Поэтому
            обновление любой модели Mazda – это не революция. Это эволюция.
            Прогресс от лучшего к превосходному.
          </Text>
          <Image
            source={require("../../images/cx30_gallery_exterior4.jpg")}
            style={styles.centerimage}
          />
          <Image
            source={require("../../images/top_hero_1800x900_darker_smallcar.jpg")}
            style={styles.finalimage}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    alignContent: "flex-start",
    fontSize: "14px",
    fontFamily: "Segoe UI",
    paddingLeft: "10px",
  },
  textFinal: {
    alignContent: "flex-start",
    fontSize: "14px",
    fontFamily: "Segoe UI",
    marginBottom: "30px",
    paddingLeft: "10px",
  },
  container: {
    flex: 1,
  },
  centerimage: {
    width: "320px",
    height: "145px",
    marginBottom: "6px",
  },
  finalimage: {
    width: "320px",
    height: "145px",
  },
  topimage: {
    width: "320px",
    height: "165px",
  },
  header: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontFamily: "Segoe UI",
    marginBottom: "30px",
    marginTop: "30px",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
