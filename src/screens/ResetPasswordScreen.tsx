import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface ResetPasswordScreenProps {
    onSubmit: () => void;
    onBack?: () => void;
}

export const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ onSubmit, onBack }) => {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            {onBack && (
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
            )}

            {/* Header */}
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Please reset your password</Text>

            {/* Email Input */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="samuel.moses@gmail.com"
                    placeholderTextColor={COLORS.textLight}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.m,
    },
    backButton: {
        marginTop: SPACING.m,
        marginBottom: SPACING.m,
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: SPACING.l,
    },
    inputGroup: {
        gap: SPACING.xs,
    },
    label: {
        fontSize: FONT_SIZE.m,
        fontWeight: '500',
        color: COLORS.text,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m - 2,
        fontSize: FONT_SIZE.m,
        backgroundColor: '#F5F5F7',
    },
});
