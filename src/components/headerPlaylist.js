import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const HeaderPlaylist = ({ playlistDescription, playlistName, playlistUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: playlistUrl }} />
      <Text style={styles.name}> {playlistName}</Text>
      <Text style={styles.description}> {playlistDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
    padding: 15,
  },
  image: {
    width: "50%",
    height: "80%",
    alignSelf: "center",
    borderRadius: 4,
    marginBottom: 5,
    resizeMode: "contain",
    marginTop: 2,
  },
  name: {
    fontWeight: "bold",
  },
  description: {
    height: "auto",
  },
});
export default HeaderPlaylist;
