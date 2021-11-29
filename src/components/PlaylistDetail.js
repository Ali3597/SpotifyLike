import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const PlaylistDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.images[0].url }} />
      <Text style={styles.name}> {result.name}</Text>
      <Text>{result.description.substring(0, 30) + "..."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
export default PlaylistDetail;
