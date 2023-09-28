import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import baseStyle from "../styles/Base";

//main app should contain navigationcontainer as root element
export default function AboutScreen() {
  return (
    <View style={baseStyle.screenContainer}>
      <Text style={styles.text}>
        This app displays the most recent publications on the platform 'Sveriges
        Radio', which is the national public radio broadcaster of Sweden.{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ text: { margin: 50 } });
