import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator, View } from "react-native";

// import Stacknavigator from "./src/navigation/Stacknavigator";
import { persistor, store } from "./src/redux/store";
import NavigationScreen from "./src/navigation/NavigationScreen";
// import LandingNavigation from "./src/navigation/LandingNavigation";

const LoadingScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    }}
  >
    <ActivityIndicator size="large" color="#1a1a2e" />
  </View>
);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationScreen />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
