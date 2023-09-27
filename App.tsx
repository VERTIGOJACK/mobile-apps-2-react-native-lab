import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

//expo icons library
import { Ionicons } from "@expo/vector-icons";

//get navcontainer from native
import { NavigationContainer } from "@react-navigation/native";

//import createtabnav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import HomeScreen from "./screens/HomeScreen";
import PublicationsScreen from "./screens/PublicationsScreen";
import AboutScreen from "./screens/AboutScreen";

//tab contains Screen and Navigator
const Tab = createBottomTabNavigator();

//icons for navigation
const homeIcon = () => {
  return <Ionicons name="home"></Ionicons>;
};
const publicationsIcon = () => {
  return <Ionicons name="newspaper"></Ionicons>;
};
const AboutIcon = () => {
  return <Ionicons name="information-circle"></Ionicons>;
};

//App should contain navigationcontainer as root element
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: homeIcon,
          }}
        />
        <Tab.Screen
          name="Publications"
          component={PublicationsScreen}
          options={{
            tabBarIcon: publicationsIcon,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: AboutIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
