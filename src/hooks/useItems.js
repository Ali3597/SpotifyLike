import React, { useState, useEffect } from "react";
import useToken from "./useToken";
import axios from "axios";

export default (id) => {
  const idPlaylist = id;
  const token = useToken();
  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");

  const searchApi = async (idPlaylist, token) => {
    axios(`https://api.spotify.com/v1/playlists/${idPlaylist}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/application/json",
        Authorization: "Bearer " + token,
      },
      params: {
        market: "Fr",
      },
    })
      .then((response) => {
        setResults(response.data.tracks.items);
        setPlaylistDescription(response.data.description);
        setPlaylistName(response.data.name);
        setPlaylistUrl(response.data.images[0].url);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    searchApi(idPlaylist, token);
  }, [token]);
  return [results, playlistDescription, playlistName, playlistUrl];
};
