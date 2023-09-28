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
const Icon = (focused, name) => {
  const newValue = focused ? 40 : 30;
  return <Ionicons name={name} size={newValue} style={styles.icons}></Ionicons>;
};

//App should contain navigationcontainer as root element
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        style="light" // Set the status bar style to light content (white icons)
        backgroundColor="blue" // Set the background color if needed
      />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarIconStyle: styles.icons,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: "white", // Make icons and title text white
            tabBarIcon: ({ focused }) => {
              return Icon(focused, "home");
            },
          }}
        />
        <Tab.Screen
          name="Publications"
          component={PublicationsScreen}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            tabBarIcon: ({ focused }) => {
              return Icon(focused, "newspaper");
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            tabBarIcon: ({ focused }) => {
              return Icon(focused, "information-circle");
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 80,
  },
  icons: { color: "blue" },
  header: { backgroundColor: "blue" },
  headerTitle: { color: "white" },
  statusBar: { color: "white" },
});
