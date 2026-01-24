import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BloodDonationRequestsScreen } from "../screens/BloodDonationRequestsScreen";
import { BloodRequestDetailsScreen } from "../screens/BloodRequestDetailsScreen";
import { EligibilityQuestionnaireScreen } from "../screens/EligibilityQuestionnaireScreen";
import { EligibilityConfirmedScreen } from "../screens/EligibilityConfirmedScreen";
import { ThankYouScreen } from "../screens/ThankYouScreen";
import { BloodBanksScreen } from "../screens/BloodBanksScreen";

const Stack = createStackNavigator();

export const RequestsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="RequestsList"
        component={BloodDonationRequestsScreen}
      />
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
      <Stack.Screen name="BloodBanks" component={BloodBanksScreen} />
    </Stack.Navigator>
  );
};
