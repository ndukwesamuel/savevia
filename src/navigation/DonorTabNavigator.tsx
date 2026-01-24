import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { HomeStackNavigator } from './HomeStackNavigator';
import { RequestsStackNavigator } from './RequestsStackNavigator';
import { InboxStackNavigator } from './InboxStackNavigator';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { DonorProfileScreen } from '../screens/DonorProfileScreen';

const Tab = createBottomTabNavigator();

export const DonorTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.textLight,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 88 : 70,
                    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                    paddingTop: 12,
                    paddingHorizontal: SPACING.s,
                    backgroundColor: COLORS.secondary,
                    borderTopWidth: 0,
                    elevation: 0,
                    ...SHADOWS.large,
                },
                tabBarLabelStyle: {
                    fontSize: FONT_SIZE.xs,
                    fontWeight: '600',
                    marginTop: 4,
                },
                tabBarItemStyle: {
                    paddingVertical: 4,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Requests':
                            iconName = focused ? 'document-text' : 'document-text-outline';
                            break;
                        case 'Inbox':
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                            break;
                        case 'Notifications':
                            iconName = focused ? 'notifications' : 'notifications-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        default:
                            iconName = 'help-outline';
                    }

                    return (
                        <View style={[
                            styles.iconContainer,
                            focused && styles.iconContainerFocused
                        ]}>
                            <Ionicons
                                name={iconName as any}
                                size={focused ? 26 : 24}
                                color={color}
                            />
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Requests"
                component={RequestsStackNavigator}
                options={{
                    tabBarLabel: 'Requests',
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxStackNavigator}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarBadge: undefined, // Can add badge count here
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: 'Alerts',
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.primary,
                        color: COLORS.secondary,
                        fontSize: FONT_SIZE.xs,
                        fontWeight: '600',
                        minWidth: 18,
                        height: 18,
                        borderRadius: 9,
                        borderWidth: 2,
                        borderColor: COLORS.secondary,
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={DonorProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 32,
        borderRadius: BORDER_RADIUS.m,
    },
    iconContainerFocused: {
        backgroundColor: 'rgba(230, 57, 70, 0.1)',
    },
});
