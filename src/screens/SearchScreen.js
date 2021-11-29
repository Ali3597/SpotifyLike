import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import SearchBar from "../components/searchBar";
import useSearch from "../hooks/useSearch";
import PlaylistDetail from "../components/PlaylistDetail";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = (props) => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [results, searchApi] = useSearch();
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Item", {
                  itemId: item.id,
                })
              }
            >
              <PlaylistDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
});
export default SearchScreen;
