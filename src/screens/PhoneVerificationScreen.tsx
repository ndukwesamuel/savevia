import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface PhoneVerificationScreenProps {
    onVerify: () => void;
    onBack?: () => void;
}

export const PhoneVerificationScreen: React.FC<PhoneVerificationScreenProps> = ({ onVerify, onBack }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            {onBack && (
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
            )}

            {/* Header */}
            <Text style={styles.title}>Phone Verification</Text>
            <Text style={styles.subtitle}>Please enter 6-digit code sent to your number and email address</Text>

            {/* Code Input */}
            <View style={styles.codeContainer}>
                <Text style={styles.label}>Enter Code</Text>
                <View style={styles.codeInputs}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.codeBox}
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                        />
                    ))}
                </View>
                <Text style={styles.resendText}>Resend Code in 50 secs</Text>
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
    codeContainer: {
        gap: SPACING.m,
    },
    label: {
        fontSize: FONT_SIZE.m,
        fontWeight: '500',
        color: COLORS.text,
    },
    codeInputs: {
        flexDirection: 'row',
        gap: SPACING.s,
        justifyContent: 'space-between',
    },
    codeBox: {
        flex: 1,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        backgroundColor: '#F5F5F7',
        fontSize: FONT_SIZE.xl,
        textAlign: 'center',
        fontWeight: '600',
    },
    resendText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginTop: SPACING.xs,
    },
});
