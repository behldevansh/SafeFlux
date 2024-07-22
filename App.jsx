import React from "react";
import { SafeAreaView, StyleSheet,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./components/Navbar"; // Adjust the path as needed

const HomeScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Home Screen</Text>
  </SafeAreaView>
);

const TryScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Try Screen</Text>
  </SafeAreaView>
);

const OutputScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Text style={styles.screenText}>Output Screen</Text>
  </SafeAreaView>
);

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Try" component={TryScreen} />
    <Stack.Screen name="Output" component={OutputScreen} />
    {/* Add other screens here */}
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 20,
    color: "#000",
  },
});

export default App;
