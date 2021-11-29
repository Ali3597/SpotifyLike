import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import PlaylistList from "../components/PlaylistList";
import useResults from "../hooks/useResults";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <PlaylistList
          results={useResults("toplists")}
          title="Nos meilleurs playlists du moments"
        />
        <PlaylistList
          results={useResults("pop")}
          title="Nos meilleurs playlists pop"
        />
        <PlaylistList
          results={useResults("mood")}
          title="Nos meilleurs playlists dans le mood"
        />
        <PlaylistList
          results={useResults("hiphop")}
          title="Nos meilleurs playlists HipHop"
        />
        <PlaylistList
          results={useResults("workout")}
          title="Nos meilleurs playlists pour le sport "
        />
        <PlaylistList
          results={useResults("at_home")}
          title="Nos meilleurs playlists à écouter à la maison "
        />
        <PlaylistList
          results={useResults("rock")}
          title="Nos meilleurs playlists de rock"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default HomeScreen;
