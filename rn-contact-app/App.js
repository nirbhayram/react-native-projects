
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import AddContactScreen from "./src/screen/AddContactScreen";
import HomeScreen from "./src/screen/HomeScreen";
import ViewContactScreen from "./src/screen/ViewContactScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddContactScreen} />
        <Stack.Screen name="View" component={ViewContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
