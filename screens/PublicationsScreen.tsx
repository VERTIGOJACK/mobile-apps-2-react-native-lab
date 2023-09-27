import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import baseStyle from "../styles/Base";
import { useFocusEffect } from "@react-navigation/native";
import { Show, SrAPIResponse } from "../schema/SrApiRespone";

export default function PublicationsScreen() {
  //declare state
  const [publications, SetPublications] = React.useState<Show[]>([]);
  const [isLoaded, SetisLoaded] = React.useState(false);

  //use response to set publications, once
  const getData = React.useCallback(() => {
    //declare async function
    const func = async () => {
      const response = await apiRequest();
      SetPublications(response);
    };

    //run
    func();
  }, []);

  //lifecycle hook
  useFocusEffect(getData);

  //using flatlist to map over the objects
  return (
    <View>
      <FlatList
        data={publications}
        keyExtractor={keyExtractor}
        renderItem={renderItem}></FlatList>
    </View>
  );
}

//options for fetch
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

//using typescript schema, return api response.
const apiRequest = async () => {
  const response = await fetch(
    "http://api.sr.se/api/v2/lastpublished?format=json",
    options
  );
  const json = (await response.json()) as SrAPIResponse;
  return json.shows;
};

//key for flatlist
const keyExtractor = (item: Show) => {
  return item.id.toString();
};

//renderitem for flatlist
//not the same as "show", is changed by flatlist
const renderItem = (item) => {
  return <ListItem item={item.item}></ListItem>;
};
