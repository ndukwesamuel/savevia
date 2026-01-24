import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DonorHomeScreen } from "../screens/DonorHomeScreen";
import { OngoingDonationScreen } from "../screens/OngoingDonationScreen";
import { SaveALifeScreen } from "../screens/SaveALifeScreen";
import { BloodBanksScreen } from "../screens/BloodBanksScreen";
import { HamburgerMenu } from "../screens/HamburgerMenu";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={DonorHomeScreen} />
      <Stack.Screen name="OngoingDonation" component={OngoingDonationScreen} />
      <Stack.Screen name="SaveALife" component={SaveALifeScreen} />
      <Stack.Screen name="BloodBanks" component={BloodBanksScreen} />
      <Stack.Screen name="Menu" component={HamburgerMenu} />
    </Stack.Navigator>
  );
};
