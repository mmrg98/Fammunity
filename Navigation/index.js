import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

// Screens
import { FEED, EXPLORE, USER } from "./screenNames.js";

//component
import Feed from "../Components/Feed/Feed";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={FEED}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      {/* <Screen name={USER} /> */}
      {/* <Screen name={EXPLORE} /> */}
      <Screen name={FEED} component={Feed} />
    </Navigator>
  );
}
