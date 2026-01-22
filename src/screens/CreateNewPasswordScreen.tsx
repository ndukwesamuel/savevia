import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface CreateNewPasswordScreenProps {
    onComplete: () => void;
    onBack?: () => void;
}

export const CreateNewPasswordScreen: React.FC<CreateNewPasswordScreenProps> = ({ onComplete, onBack }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Password validation checks
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Back Button */}
                {onBack && (
                    <TouchableOpacity style={styles.backButton} onPress={onBack}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                )}

                {/* Header */}
                <Text style={styles.title}>Create New Password</Text>
                <Text style={styles.subtitle}>Please create your password</Text>

                {/* Form */}
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>New Password</Text>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor={COLORS.textLight}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                            <TouchableOpacity style={styles.eyeIcon}>
                                <Text>👁️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="!2345678"
                                placeholderTextColor={COLORS.textLight}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                            />
                            <TouchableOpacity style={styles.eyeIcon}>
                                <Text>👁️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Password Requirements */}
                    <View style={styles.requirementsContainer}>
                        <Text style={styles.requirementsTitle}>Password mus contain at least</Text>

                        <View style={styles.requirement}>
                            <View style={[styles.checkCircle, hasMinLength && styles.checkCircleValid]}>
                                {hasMinLength && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.requirementText}>8 characters</Text>
                        </View>

                        <View style={styles.requirement}>
                            <View style={[styles.checkCircle, hasUppercase && styles.checkCircleValid]}>
                                {hasUppercase && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.requirementText}>One Uppercase Letter</Text>
                        </View>

                        <View style={styles.requirement}>
                            <View style={[styles.checkCircle, hasSpecialChar && styles.checkCircleValid]}>
                                {hasSpecialChar && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.requirementText}>One Special Character e.g !'^@*#(</Text>
                        </View>
                        {/* Submit Button */}
                        <TouchableOpacity
                            style={[styles.submitButton, !hasMinLength || !hasUppercase || !hasSpecialChar || password !== confirmPassword ? styles.submitButtonDisabled : {}]}
                            onPress={onComplete}
                            disabled={!hasMinLength || !hasUppercase || !hasSpecialChar || password !== confirmPassword}
                        >
                            <Text style={styles.submitButtonText}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingHorizontal: SPACING.m,
        paddingBottom: SPACING.xl,
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
    form: {
        gap: SPACING.m,
    },
    inputGroup: {
        gap: SPACING.xs,
    },
    label: {
        fontSize: FONT_SIZE.m,
        fontWeight: '500',
        color: COLORS.text,
    },
    passwordInputContainer: {
        position: 'relative',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m - 2,
        fontSize: FONT_SIZE.m,
        backgroundColor: '#F5F5F7',
        paddingRight: 48,
    },
    eyeIcon: {
        position: 'absolute',
        right: SPACING.m,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
    requirementsContainer: {
        marginTop: SPACING.s,
        gap: SPACING.s,
    },
    requirementsTitle: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: SPACING.xs,
    },
    requirement: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.s,
    },
    checkCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.textLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkCircleValid: {
        borderColor: COLORS.primary,
        backgroundColor: 'transparent',
    },
    checkmark: {
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
    requirementText: {
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        paddingVertical: SPACING.m,
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    submitButtonDisabled: {
        opacity: 0.5,
    },
    submitButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
});
