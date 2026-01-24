// import React from "react";
// import { Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { COLORS } from "../../constants/theme";
// import { DonorHomeScreen } from "../../screens/DonorHomeScreen";
// import { BloodDonationRequestsScreen } from "../../screens/BloodDonationRequestsScreen";
// import { DonorProfileScreen } from "../../screens/DonorProfileScreen";
// import ProfileScreen from "../../screens/ProfileScreen";
// // COLORS
// // import { HomeStackNavigator } from "./HomeStackNavigator";
// // import { RequestsStackNavigator } from "./RequestsStackNavigator";
// // import { InboxStackNavigator } from "./InboxStackNavigator";
// // import { NotificationsScreen } from "../screens/NotificationsScreen";
// // import { RewardsScreen } from "../screens/RewardsScreen";
// // import { DonorProfileScreen } from "../screens/DonorProfileScreen";

// const Tab = createBottomTabNavigator();

// export default function UserBottomtabnavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: COLORS.primary,
//         tabBarInactiveTintColor: "#8E8E93",
//         tabBarStyle: {
//           height: 60,
//           paddingBottom: 8,
//           paddingTop: 8,
//           borderTopWidth: 1,
//           borderTopColor: "#E5E5EA",
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: "500",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={DonorHomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
//         }}
//       />

//       <Tab.Screen
//         name="Requests"
//         component={BloodDonationRequestsScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📄</Text>,
//         }}
//       />
//       {/*

//       <Tab.Screen
//         name="Inbox"
//         component={InboxStackNavigator}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>💬</Text>,
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🔔</Text>,
//           tabBarBadge: 3,
//         }}
//       />
//       <Tab.Screen
//         name="Rewards"
//         component={RewardsScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏆</Text>,
//         }}
//       />

//       /> */}

//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>👤</Text>,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { DonorHomeScreen } from "../../screens/DonorHomeScreen";
import { BloodDonationRequestsScreen } from "../../screens/BloodDonationRequestsScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import NotificationsScreen from "../../screens/Notification/NotificationsScreen";
import RewardsScreen from "../../screens/RewardsScreen";
import InboxScreen from "../../screens/InboxScreen";
// import { NotificationsScreen } from "../../screens/NotificationsScreen";
const Tab = createBottomTabNavigator();

export default function UserBottomtabnavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
          backgroundColor: "#FFF",
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
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Requests"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
