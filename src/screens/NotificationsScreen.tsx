import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const NotificationsScreen = () => {
    const notifications = [
        {
            id: 1,
            icon: '🩸',
            message: 'Mary, there is a new blood donation request',
            time: '12:06 PM',
            section: 'Today',
        },
        {
            id: 2,
            icon: '🏆',
            message: 'Mary, you just reached a new milestone!',
            time: '12:06 PM',
            section: 'Today',
        },
        {
            id: 3,
            icon: '📰',
            message: 'Check out this health article by the United Nations',
            time: '12:06 PM',
            section: 'Today',
        },
        {
            id: 4,
            icon: '🩸',
            message: 'Mary, there is a new blood donation request',
            time: '12:06 PM',
            section: 'Yesterday',
        },
        {
            id: 5,
            icon: '🏆',
            message: 'Mary, you just reached a new milestone!',
            time: '12:06 PM',
            section: 'Yesterday',
        },
    ];

    const groupedNotifications = notifications.reduce((acc, notification) => {
        if (!acc[notification.section]) {
            acc[notification.section] = [];
        }
        acc[notification.section].push(notification);
        return acc;
    }, {} as Record<string, typeof notifications>);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Notifications List */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {Object.entries(groupedNotifications).map(([section, items]) => (
                    <View key={section}>
                        <Text style={styles.sectionTitle}>{section}</Text>
                        {items.map((notification) => (
                            <TouchableOpacity key={notification.id} style={styles.notificationItem}>
                                <View style={styles.notificationIcon}>
                                    <Text style={styles.iconText}>{notification.icon}</Text>
                                </View>
                                <View style={styles.notificationContent}>
                                    <Text style={styles.notificationMessage}>{notification.message}</Text>
                                    <Text style={styles.notificationTime}>{notification.time}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
    },
    placeholder: {
        width: 40,
    },
    scrollView: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        color: COLORS.text,
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.m,
        paddingBottom: SPACING.s,
    },
    notificationItem: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    notificationIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    iconText: {
        fontSize: 20,
    },
    notificationContent: {
        flex: 1,
        justifyContent: 'center',
    },
    notificationMessage: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
        marginBottom: 4,
    },
    notificationTime: {
        fontSize: FONT_SIZE.xs,
        color: COLORS.textLight,
    },
});
