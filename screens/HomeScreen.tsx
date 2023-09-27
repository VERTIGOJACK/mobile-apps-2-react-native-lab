import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import baseStyle from "../styles/Base";

//require local image
const myImage = require("../assets/sr.jpg");

//main app should contain navigationcontainer as root element
export default function HomeScreen() {
  return (
    <View style={baseStyle.screenContainer}>
      {/* pass entire image varaible as source */}
      <Image
        style={{ ...baseStyle.fitImage, flex: 2 }}
        source={myImage}></Image>
      <Text style={{ flex: 1 }}>Sveriges radio - API DEMO</Text>
    </View>
  );
}
