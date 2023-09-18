import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  [userInput, setUserInput] = useState("");
  [bookList, setBookList] = useState([]);

  const handleInputChange = (value) => {
    setUserInput(value);
  };

  const addBook = () => {
    setBookList([...bookList, userInput]);
    setUserInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        {/* two way binding for userinput using value and onchangetext */}
        <TextInput
          onChangeText={handleInputChange}
          value={userInput}
          placeholder="Enter book name"
          style={styles.textInput}></TextInput>
        <Button title="Add" onPress={addBook}></Button>
      </View>
      <View style={styles.listView}>
        {/* parentheses inside map function means result should be interpreted as JSX*/}
        {bookList.map((item, index) => (
          // every item should have a unique key
          <Text key={index}>{item}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff",
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "blue",
  },
  listView: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
