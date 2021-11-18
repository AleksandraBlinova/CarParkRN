import React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
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
      <DrawerItem
        label="МЕНЮ"
        labelStyle={{
          color: "white",
          fontSize: 24,
          fontFamily: "Segoe UI",
          fontWeight: "600",
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // overlayColor: "black",
        drawerActiveBackgroundColor: "black",
        drawerInactiveBackgroundColor: "black",
        drawerStatusBarAnimation: "slide",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
        },
        drawerStyle: {
          backgroundColor: "black",
          width: 240,
        },
        drawerLabelStyle: {
          color: "white",
          fontSize: 16,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        component={Home}
        name="Главная"
        options={{
          drawerLabel: "Главная",
        }}
      />
      <Drawer.Screen
        component={Offers}
        name="Предложения"
        options={{ drawerLabel: "Предложения" }}
      />
      <Drawer.Screen
        component={Contacts}
        name="Контакты"
        options={{ drawerLabel: "Контакты" }}
      />
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
