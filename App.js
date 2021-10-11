import React, { useState } from "react";
import { Header } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { View } from "react-native";

const list = [
  {
    name: "Главная",
  },
  {
    name: "Предложения",
  },
  {
    name: "Автомобили в наличии",
  },
  {
    name: "Контакты",
  },
];

export default function App() {
  const [expanded, setExpanded] = useState(true);
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { color: "#fff" },
        }}
      ></Header>

      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>МЕНЮ</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {list.map((l, i) => (
          <ListItem key={i} onPress={log} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
    </SafeAreaProvider>
  );
}
