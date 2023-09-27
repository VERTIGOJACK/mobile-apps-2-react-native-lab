import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import baseStyle from "../styles/Base";

//main app should contain navigationcontainer as root element
export default function AboutScreen() {
  return (
    <View style={baseStyle.screenContainer}>
      <Text>Hello from about component</Text>
    </View>
  );
}
