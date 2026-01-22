import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Stacknavigator from "./UserNavigation/UserStacknavigator";
import AuthNavigation from "./AuthNavigation";
import UserStacknavigator from "./UserNavigation/UserStacknavigator";

export default function NavigationScreen() {
  //   const { token } = useSelector((state: any) => state?.authSlice);

  let token = true;
  return (
    <NavigationContainer>
      {token ? (
        // User is logged in - show main app
        <>
          <MainSwitchScrren />
          <StatusBar style="auto" />
        </>
      ) : (
        // User is not logged in - show auth/onboarding flow
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
}

export function MainSwitchScrren() {
  return (
    <>
      <UserStacknavigator />
    </>
  );
}
