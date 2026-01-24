import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserBottomtabnavigator from "./UserBottomtabnavigator";
import { OngoingDonationScreen } from "../../screens/OngoingDonationScreen";
import { SaveALifeScreen } from "../../screens/SaveALifeScreen";
import { BloodBanksScreen } from "../../screens/BloodBanksScreen";
import { HamburgerMenu } from "../../screens/HamburgerMenu";
import { BloodRequestDetailsScreen } from "../../screens/BloodRequestDetailsScreen";
import { EligibilityQuestionnaireScreen } from "../../screens/EligibilityQuestionnaireScreen";
import { EligibilityConfirmedScreen } from "../../screens/EligibilityConfirmedScreen";
import { ThankYouScreen } from "../../screens/ThankYouScreen";
import UpdateCredentialsScreen from "../../screens/UpdateCredentialsScreen";
import ChatScreen from "../../screens/ChatScreen";
// import BottomTabNavigator from "../Bottomtabnavigator";
// import BottomTabNavigator from "./Bottomtabnavigator";
// import ProfileScreen from "../screens/settings/ProfileScreen";
// import SecurityScreen from "../screens/settings/Securityscreen";
// import BankAccountsScreen from "../screens/settings/Bankaccountsscreen";
// import HelpSupportScreen from "../screens/settings/Helpsupportscreen";
// import AboutScreen from "../screens/settings/Aboutscreen";

// import BottomTabNavigator from "./BottomTabNavigator";
// BottomTabNavigator
// import BottomTabNavigator from "../Bottomtabnavigator";
// BottomTabNavigator

// // Settings Screens
// import ProfileScreen from "../screens/settings/ProfileScreen";
// import SecurityScreen from "../screens/settings/SecurityScreen";
// import BankAccountsScreen from "../screens/settings/BankAccountsScreen";
// import HelpSupportScreen from "../screens/settings/HelpSupportScreen";
// import AboutScreen from "../screens/settings/AboutScreen";

export type RootStackParamList = {
  HomeMain: undefined;
  OngoingDonation: undefined;
  SaveALife: undefined;
  BloodBanks: undefined;
  Menu: undefined;
  About: undefined;
  UpdateCredentialsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserStacknavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={UserBottomtabnavigator} />

      <Stack.Screen name="OngoingDonation" component={OngoingDonationScreen} />
      <Stack.Screen name="SaveALife" component={SaveALifeScreen} />
      <Stack.Screen name="BloodBanks" component={BloodBanksScreen} />
      <Stack.Screen name="Menu" component={HamburgerMenu} />
      <Stack.Screen
        name="UpdateCredentialsScreen"
        component={UpdateCredentialsScreen}
      />

      {/* <Stack.Screen name="RequestsList" component={BloodDonationRequestsScreen} /> */}
      <Stack.Screen
        name="RequestDetails"
        component={BloodRequestDetailsScreen}
      />
      <Stack.Screen
        name="EligibilityQuestionnaire"
        component={EligibilityQuestionnaireScreen}
      />
      <Stack.Screen
        name="EligibilityConfirmed"
        component={EligibilityConfirmedScreen}
      />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />

      {/* <Stack.Screen name="BloodBanks" component={BloodBanksScreen} /> */}
    </Stack.Navigator>
  );
};

export default UserStacknavigator;
