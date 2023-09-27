import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import baseStyle from "../styles/Base";
import { Show } from "../schema/SrApiRespone";

//main app should contain navigationcontainer as root element
export default function ListItem(props) {
  //get show from props
  const show: Show = props.item;

  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Text style={style.type}>{show.type}</Text>
        <Image style={style.coverImage} source={{ uri: show.imageurl }}></Image>
      </View>
      <View style={style.aside}>
        <Text>{transformTitle(show.title)}</Text>
        <Text>{show.program.name}</Text>
        <Text>{transformDate(show.dateutc)}</Text>
        <Text>
          {show.listenpodfile
            ? transformTime(show.listenpodfile.duration)
            : "No pod file"}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 200,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  aside: { flex: 1, alignItems: "center" },
  leftContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  coverImage: { flex: 8, aspectRatio: "1/1", borderRadius: 10 },
  type: { flex: 1 },
});

const transformTitle = (title: string) => {
  //titles sometimes contain timestamps, use regex to remove by
  //replacing everything not matching expression with empty string
  //what complicates this is that sr uses numbers in their show names (P3 P4 etc.)
  return title.replace(/[^a-zA-ZåäöÅÄÖ\s-.,\\]+|P\d+/gi, "");
};

const transformDate = (date: string) => {
  // Extract the unix timestamp (chatgpt provided regex)
  date = date.replace(/\D/g, "");

  // convert to date
  const newDate = new Date(parseInt(date));

  // build date string
  const dateString = newDate.toISOString().split("T").shift();

  //return
  return dateString;
};

const transformTime = (time: number) => {
  const minutes = Math.round(time / 60);
  const seconds = Math.round(time % 60);

  // Format the result with zero-padding
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
};
