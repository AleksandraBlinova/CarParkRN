import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./Footer.styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <div>
        <MaterialCommunityIcons
          name="facebook"
          size={24}
          color="#1747A5"
          style={{ marginRight: 10, marginLeft: 5 }}
        />
        <MaterialCommunityIcons
          name="instagram"
          size={24}
          color="purple"
          style={{ marginRight: 12, marginLeft: 5 }}
        />
        <MaterialCommunityIcons name="youtube" size={24} color="#A81411" />
      </div>
    </View>
  );
}
