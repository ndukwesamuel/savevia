import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants/theme";
import { DonorHomeScreen } from "../../screens/DonorHomeScreen";
// COLORS
// import { HomeStackNavigator } from "./HomeStackNavigator";
// import { RequestsStackNavigator } from "./RequestsStackNavigator";
// import { InboxStackNavigator } from "./InboxStackNavigator";
// import { NotificationsScreen } from "../screens/NotificationsScreen";
// import { RewardsScreen } from "../screens/RewardsScreen";
// import { DonorProfileScreen } from "../screens/DonorProfileScreen";

const Tab = createBottomTabNavigator();

export default function UserBottomtabnavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: "#E5E5EA",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DonorHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
        }}
      />
      {/* <Tab.Screen
        name="Requests"
        component={RequestsStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📄</Text>,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>💬</Text>,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🔔</Text>,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏆</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DonorProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>👤</Text>,
        }}
      /> */}
    </Tab.Navigator>
  );
}
