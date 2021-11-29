import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import useItems from "../hooks/useItems";
import HeaderPlaylist from "../components/headerPlaylist";
import SongElement from "../components/SongElement";

const ItemScreen = ({ route }) => {
  const { itemId } = route.params;
  const [results, playlistDescription, playlistName, playlistUrl] =
    useItems(itemId);
  return (
    <View style={styles.container}>
      <HeaderPlaylist
        playlistDescription={playlistDescription}
        playlistName={playlistName}
        playlistUrl={playlistUrl}
      />
      <FlatList
        data={results}
        keyExtractor={(result, index) => index}
        renderItem={({ item }) => {
          return <SongElement result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  screen: {
    flex: 1,
  },
});
export default ItemScreen;
