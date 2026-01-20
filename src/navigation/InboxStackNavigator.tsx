import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InboxScreen } from '../screens/InboxScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Stack = createStackNavigator();

export const InboxStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InboxList" component={InboxScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    );
};
