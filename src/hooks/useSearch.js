import React, { useState, useEffect } from "react";
import useToken from "./useToken";
import axios from "axios";

export default (term) => {
  const searchTerm = term;
  const token = useToken();
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    axios(`https://api.spotify.com/v1/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/application/json",
        Authorization: "Bearer " + token,
      },
      params: {
        q: searchTerm,
        type: "playlist",
        market: "FR",
      },
    })
      .then((response) => {
        setResults(response.data.playlists.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    searchApi(searchTerm);
  }, [token]);
  return [results, searchApi];
};
