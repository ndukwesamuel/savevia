import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface ChatScreenProps {
    onBack: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ onBack }) => {
    const [message, setMessage] = useState('');

    const messages = [
        { id: 1, sender: 'hospital', text: 'We are in dire need of a blood donor, please where are you currently?', time: '' },
        { id: 2, sender: 'me', text: 'I will be with you in a bit.', time: '' },
        { id: 3, sender: 'hospital', text: 'St Nicholas is typing...', isTyping: true },
    ];

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
        >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.hospitalAvatar}>
                    <Text style={styles.hospitalAvatarText}>🏥</Text>
                </View>
                <View style={styles.hospitalInfo}>
                    <Text style={styles.hospitalName}>St Nicholas Hospital</Text>
                    <Text style={styles.hospitalStatus}>Online</Text>
                </View>
            </View>

            {/* Messages */}
            <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
                {messages.map((msg) => (
                    <View
                        key={msg.id}
                        style={[
                            styles.messageWrapper,
                            msg.sender === 'me' && styles.messageWrapperRight
                        ]}
                    >
                        {msg.sender === 'hospital' && (
                            <View style={styles.senderAvatar}>
                                <Text style={styles.senderAvatarText}>🏥</Text>
                            </View>
                        )}
                        <View style={[
                            styles.messageBubble,
                            msg.sender === 'me' ? styles.messageBubbleMe : styles.messageBubbleOther,
                            msg.isTyping && styles.typingBubble
                        ]}>
                            {msg.isTyping ? (
                                <Text style={styles.typingText}>{msg.text}</Text>
                            ) : (
                                <Text style={[
                                    styles.messageText,
                                    msg.sender === 'me' && styles.messageTextMe
                                ]}>
                                    {msg.text}
                                </Text>
                            )}
                        </View>
                        {msg.sender === 'me' && (
                            <View style={styles.myAvatar}>
                                <Text style={styles.myAvatarText}>M</Text>
                            </View>
                        )}
                    </View>
                ))}
                <View style={{ height: 20 }} />
            </ScrollView>

            {/* Input Bar */}
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconEmoji}>😊</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Write a message"
                    placeholderTextColor={COLORS.textLight}
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconAttachment}>📎</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconMic}>🎤</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendIcon}>➤</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
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
    hospitalAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E8F4FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.s,
    },
    hospitalAvatarText: {
        fontSize: 20,
    },
    hospitalInfo: {
        flex: 1,
    },
    hospitalName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
    },
    hospitalStatus: {
        fontSize: FONT_SIZE.s,
        color: '#4CAF50',
    },
    messagesContainer: {
        flex: 1,
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.m,
    },
    messageWrapper: {
        flexDirection: 'row',
        marginBottom: SPACING.m,
        alignItems: 'flex-end',
    },
    messageWrapperRight: {
        justifyContent: 'flex-end',
    },
    senderAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E8F4FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.s,
    },
    senderAvatarText: {
        fontSize: 16,
    },
    myAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SPACING.s,
    },
    myAvatarText: {
        color: COLORS.secondary,
        fontSize: 16,
        fontWeight: '600',
    },
    messageBubble: {
        maxWidth: '70%',
        padding: SPACING.m,
        borderRadius: 16,
    },
    messageBubbleOther: {
        backgroundColor: '#2C3E50',
    },
    messageBubbleMe: {
        backgroundColor: '#1E3A8A',
    },
    typingBubble: {
        backgroundColor: '#F5F5F7',
    },
    messageText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.secondary,
        lineHeight: 20,
    },
    messageTextMe: {
        color: COLORS.secondary,
    },
    typingText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        fontStyle: 'italic',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        borderTopWidth: 1,
        borderTopColor: '#E5E5EA',
        backgroundColor: COLORS.background,
    },
    iconButton: {
        padding: SPACING.s,
    },
    iconEmoji: {
        fontSize: 20,
    },
    iconAttachment: {
        fontSize: 20,
    },
    iconMic: {
        fontSize: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendIcon: {
        fontSize: 18,
        color: COLORS.secondary,
    },
});
