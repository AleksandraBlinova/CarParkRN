import React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "../sections/HomeSection/HomePage";
import Offers from "../OfferSection/Offers";
import Contacts from "../ContactsSection/Contacts";

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        //headerStyle: { backgroundColor: "black" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name="Главная" />
      <Drawer.Screen component={Offers} name="Предложения" />
      <Drawer.Screen component={Contacts} name="Контакты" />
    </Drawer.Navigator>
  );
};

export default function Menu() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
