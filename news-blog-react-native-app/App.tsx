import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { mainStyles } from "./app/styles/style";
import Home from "./app/screen/Home";
import Details from "./app/screen/Details";
import News from "./app/screen/News";

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={[mainStyles.container, styles.container]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
