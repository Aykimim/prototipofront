import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//*****************Telas*****************

import Login from "../screens/Login";
//*****************Telas*****************

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);
