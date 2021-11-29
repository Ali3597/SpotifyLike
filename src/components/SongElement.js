import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { properTimeSong } from "../utils/Libs";

const SongElement = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: result.track.album.images[0].url }}
      />
      <Text style={styles.name}> {result.track.name}</Text>
      <Text> {result.track.artists[0].name}</Text>
      <Text> {properTimeSong(result.track.duration_ms)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});
export default SongElement;
