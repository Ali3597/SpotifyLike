import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Buffer } from "buffer";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./src/screens/SearchScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ItemScreen from "./src/screens/ItemScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: null }}
    />
    <HomeStack.Screen
      name="Item"
      component={ItemScreen}
      options={{ title: null }}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: null }}
    />
    <SearchStack.Screen
      name="Item"
      component={ItemScreen}
      options={{ title: null }}
    />
  </SearchStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(
            "ffc26cb6254f4231874c42fc20cabe9a" +
              ":" +
              "2bf1ab2aa4304384b7aec4292612982b"
          ).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then((tokenResponse) => {
        setToken(tokenResponse.data.access_token);
        try {
          AsyncStorage.setItem("token", tokenResponse.data.access_token);
        } catch (e) {
          console.log(e);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={(options) => {
          return {
            headerShown: false,
          };
        }}
      >
        <Tabs.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tabs.Screen
          name="SearchScreen"
          component={SearchStackScreen}
          options={{
            tabBarIcon: () => <Feather name="search" size={24} color="black" />,
            tabBarLabel: () => {
              return null;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
