// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { ActivityIndicator, View } from "react-native";

// import Stacknavigator from "./src/navigation/Stacknavigator";
// import { persistor, store } from "./src/redux/store";
// import LandingNavigation from "./src/navigation/LandingNavigation";
// import { NavigationScreen } from "./src/navigation/NavigationScreen";

// const LoadingScreen = () => (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#fff",
//     }}
//   >
//     <ActivityIndicator size="large" color="#1a1a2e" />
//   </View>
// );

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={<LoadingScreen />} persistor={persistor}>
//         <SafeAreaProvider>
//           <NavigationScreen />
//         </SafeAreaProvider>
//       </PersistGate>
//     </Provider>
//   );
// }

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SplashScreen } from "./src/screens/SplashScreen";
import { OnboardingScreen } from "./src/screens/OnboardingScreen";
import { UserTypeSelectionScreen } from "./src/screens/UserTypeSelectionScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { ResetPasswordScreen } from "./src/screens/ResetPasswordScreen";
import { PhoneVerificationScreen } from "./src/screens/PhoneVerificationScreen";
import { CreateNewPasswordScreen } from "./src/screens/CreateNewPasswordScreen";
import { DonorRegistrationStep1 } from "./src/screens/DonorRegistrationStep1";
import { DonorRegistrationStep2 } from "./src/screens/DonorRegistrationStep2";
import { DonorRegistrationStep3 } from "./src/screens/DonorRegistrationStep3";
import { DonorRegistrationStep4 } from "./src/screens/DonorRegistrationStep4";
import { DonorRegistrationComplete } from "./src/screens/DonorRegistrationComplete";
import { DonorTabNavigator } from "./src/navigation/DonorTabNavigator";
import { View, Text, StyleSheet } from "react-native";

type AppScreen =
  | "splash"
  | "onboarding"
  | "userType"
  | "signup"
  | "login"
  | "resetPassword"
  | "verification"
  | "createPassword"
  | "donorReg1"
  | "donorReg2"
  | "donorReg3"
  | "donorReg4"
  | "donorRegComplete"
  | "main";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("splash");

  return (
    <NavigationContainer>
      {currentScreen === "splash" && (
        <>
          <SplashScreen onFinish={() => setCurrentScreen("onboarding")} />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "onboarding" && (
        <>
          <OnboardingScreen onComplete={() => setCurrentScreen("userType")} />
          <StatusBar style="light" />
        </>
      )}

      {currentScreen === "userType" && (
        <>
          <UserTypeSelectionScreen
            onSelectType={(type) => {
              if (type === "donor") {
                setCurrentScreen("donorReg1");
              } else {
                setCurrentScreen("signup");
              }
            }}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "signup" && (
        <>
          <SignUpScreen
            onSignUp={() => setCurrentScreen("main")}
            onNavigateToLogin={() => setCurrentScreen("login")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "login" && (
        <>
          <LoginScreen
            onLogin={() => setCurrentScreen("main")}
            onNavigateToSignUp={() => setCurrentScreen("signup")}
            onForgotPassword={() => setCurrentScreen("resetPassword")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "resetPassword" && (
        <>
          <ResetPasswordScreen
            onSubmit={() => setCurrentScreen("verification")}
            onBack={() => setCurrentScreen("login")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "verification" && (
        <>
          <PhoneVerificationScreen
            onVerify={() => setCurrentScreen("createPassword")}
            onBack={() => setCurrentScreen("resetPassword")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "createPassword" && (
        <>
          <CreateNewPasswordScreen
            onComplete={() => setCurrentScreen("login")}
            onBack={() => setCurrentScreen("verification")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg1" && (
        <>
          <DonorRegistrationStep1
            onNext={() => setCurrentScreen("donorReg2")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg2" && (
        <>
          <DonorRegistrationStep2
            onNext={() => setCurrentScreen("donorReg3")}
            onBack={() => setCurrentScreen("donorReg1")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg3" && (
        <>
          <DonorRegistrationStep3
            onNext={() => setCurrentScreen("donorReg4")}
            onBack={() => setCurrentScreen("donorReg2")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg4" && (
        <>
          <DonorRegistrationStep4
            onFinish={() => setCurrentScreen("donorRegComplete")}
            onBack={() => setCurrentScreen("donorReg3")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorRegComplete" && (
        <>
          <DonorRegistrationComplete onDone={() => setCurrentScreen("main")} />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "main" && (
        <>
          <DonorTabNavigator />
          <StatusBar style="auto" />
        </>
      )}
    </NavigationContainer>
  );
}
