import React from "react";
import { View, Text, Image, Button } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { styles } from "./Footer.styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.icons}>
        <IconButton
          icon="facebook"
          color="#1747A5"
          size={24}
          onPress={() =>
            (location.href = "https://www.facebook.com/MazdaRussia")
          }
        />
        <IconButton
          icon="instagram"
          size={24}
          color="purple"
          onPress={() =>
            (location.href = "https://www.instagram.com/mazda_russia/")
          }
        />
        <IconButton
          icon="youtube"
          size={24}
          color="#A81411"
          onPress={() =>
            (location.href = "https://www.youtube.com/user/themazdarussia/feed")
          }
        />
      </View>
    </View>
  );
}
