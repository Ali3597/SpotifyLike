import React, { useState, useEffect } from "react";
import useToken from "./useToken";
import axios from "axios";

export default (id) => {
  const idPlaylist = id;
  const token = useToken();
  const [results, setResults] = useState([]);

  const searchApi = async (idPlaylist) => {
    axios(
      `https://api.spotify.com/v1/browse/categories/${idPlaylist}/playlists`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/application/json",
          Authorization: "Bearer " + token,
        },
        params: {
          country: "Fr",
        },
      }
    )
      .then((response) => {
        setResults(response.data.playlists.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    searchApi(idPlaylist);
  }, [token]);
  return results;
};
