import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const InboxScreen = () => {
    const messages = [
        { id: 1, sender: 'St Nicholas Hospital, Ajah', message: 'Thank you very much', time: '12:06 PM', avatar: 'S', unread: false },
        { id: 2, sender: 'Dr Kehinde Olatunji', message: 'Thank you for saving lives...', time: '12:06 PM', avatar: 'D', unread: false },
        { id: 3, sender: 'Dr Remota Olaleye', message: 'Thank you for saving lives...', time: '12:06 PM', avatar: 'D', unread: false },
        { id: 4, sender: 'Susan Akintunde', message: 'Where are you now?', time: '12:06 PM', avatar: 'S', unread: true, badgeCount: 1 },
        { id: 5, sender: 'Richard Ojere', message: 'I am on my way', time: '12:06 PM', avatar: 'R', unread: false, hasCheckmark: true },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Inbox</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Messages List */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {messages.map((message) => (
                    <TouchableOpacity key={message.id} style={styles.messageItem}>
                        <View style={styles.messageAvatar}>
                            <Text style={styles.messageAvatarText}>{message.avatar}</Text>
                        </View>
                        <View style={styles.messageContent}>
                            <Text style={[styles.messageSender, message.unread && styles.unreadText]}>{message.sender}</Text>
                            <View style={styles.messagePreview}>
                                {message.hasCheckmark && <Text style={styles.checkmark}>✓</Text>}
                                <Text style={[styles.messageText, message.unread && styles.unreadText]} numberOfLines={1}>
                                    {message.message}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.messageRight}>
                            <Text style={[styles.messageTime, message.unread && styles.unreadTextRed]}>{message.time}</Text>
                            {message.badgeCount && (
                                <View style={styles.unreadBadge}>
                                    <Text style={styles.unreadBadgeText}>{message.badgeCount}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
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
    messageItem: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    messageAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    messageAvatarText: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: '600',
    },
    messageContent: {
        flex: 1,
        justifyContent: 'center',
    },
    messageSender: {
        fontSize: FONT_SIZE.m,
        fontWeight: '500',
        color: COLORS.text,
        marginBottom: 4,
    },
    messagePreview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 14,
        color: COLORS.primary,
        marginRight: 4,
    },
    messageText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        flex: 1,
    },
    messageRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    messageTime: {
        fontSize: FONT_SIZE.xs,
        color: COLORS.textLight,
        marginBottom: 4,
    },
    unreadBadge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadBadgeText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: '600',
    },
    unreadText: {
        fontWeight: '600',
        color: COLORS.text,
    },
    unreadTextRed: {
        color: COLORS.primary,
        fontWeight: '600',
    },
});
