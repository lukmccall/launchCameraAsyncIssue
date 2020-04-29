import React from "react";
import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import ImagePickerExample from "./ImagePickerExample";

export default function App() {
  return <ImagePickerExample />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
