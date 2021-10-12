import { StyleSheet } from "react-native";
import React from "react";

export const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontFamily: "Segoe UI",
    marginBottom: "20px",
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "500",
  },
  cardImage: {
    borderRadius: 7,
    width: 176,
    height: 135,
    alignItems: "flex-start",
    marginLeft: 5,
  },
  text: {
    fontFamily: "Sedoe UI",
    fontSize: 10,
    fontWeight: "550",
    textAlign: "center",
    marginLeft: 5,
    marginTop: 35,
  },
  scroll: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  col1: {
    flex: 0.6,
  },
  col2: {
    flex: 0.4,
  },
  scrollCenter: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  scrollFinal: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
  },
});
