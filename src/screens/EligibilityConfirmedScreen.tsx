import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface EligibilityConfirmedScreenProps {
    onContinue: () => void;
    onBack: () => void;
}

export const EligibilityConfirmedScreen: React.FC<EligibilityConfirmedScreenProps> = ({ onContinue, onBack }) => {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.checkmarkContainer}>
                    <View style={styles.checkmark}>
                        <Text style={styles.checkmarkIcon}>✓</Text>
                    </View>
                </View>

                <Text style={styles.title}>Eligibility Confirmed</Text>
                <Text style={styles.subtitle}>Your eligibility has been confirmed</Text>

                <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    backButton: {
        position: 'absolute',
        top: SPACING.l,
        left: SPACING.m,
        width: 40,
        height: 40,
        justifyContent: 'center',
        zIndex: 10,
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
    },
    checkmarkContainer: {
        marginBottom: SPACING.xl,
    },
    checkmark: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmarkIcon: {
        fontSize: 40,
        color: COLORS.secondary,
        fontWeight: 'bold',
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.s,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZE.m,
        color: COLORS.textLight,
        marginBottom: SPACING.xxl,
        textAlign: 'center',
    },
    continueButton: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.m,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
