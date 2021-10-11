import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./Contacts.styles";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Footer from "../Footer/Footer";

export default function Contacts() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.header}>
            МЫ ВСЕГДА РАДЫ ВАМ ПОМОЧЬ И ОТВЕТИТЬ НА ЛЮБЫЕ ВАШИ ВОПРОСЫ
          </Text>
          <Text style={styles.text}>
            Большое спасибо за интерес к Mazda! Будучи открытой компанией, мы
            поддерживаем стремление клиентов к общению с Mazda. Для вашего
            удобства мы постоянно расширяем количество каналов, через которые вы
            можете задать тот или иной вопрос, будь то интерес к конкретной
            модели Mazda или интерес к сервисам, которые вам всегда готовы
            оказать дилеры Mazda, либо вы просто хотите высказать свое мнение
            или сделать предложение.
          </Text>
          <Text style={styles.adress}>
            Адрес: 125171, г.Москва, Ленинградское шоссе, 16А, стр.2 БЦ
            "Метрополис"
          </Text>
          <Text style={styles.info}>ВАЖНАЯ ИНФОРМАЦИЯ ДЛЯ КЛИЕНТОВ MAZDA</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              title="ПОДРОБНЕЕ"
              buttonStyle={{
                backgroundColor: "black",
                height: 31,
                width: 134,
                alignItems: "center",
                borderRadius: 2,
                marginTop: "10px",
              }}
              titleStyle={{
                color: "white",
                fontSize: 12,
                fontFamily: "Segoe UI",
                fontWeight: "600",
              }}

              //onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
