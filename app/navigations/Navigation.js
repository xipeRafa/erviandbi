import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from "../Restaurants";
import Favorites from "../Favorites";
import TopRestaurants from "../TopRestaurants";
import Search from "../Search";
import Account from "../Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
       
      >
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


