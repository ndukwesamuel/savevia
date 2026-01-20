import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface SignUpScreenProps {
    onSignUp: () => void;
    onNavigateToLogin: () => void;
    onBack?: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUp, onNavigateToLogin, onBack }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

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
                <Text style={styles.title}>Create An Account</Text>
                <Text style={styles.subtitle}>Fill in the correct details below</Text>

                {/* Form */}
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Full Name"
                            placeholderTextColor={COLORS.textLight}
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email Address"
                            placeholderTextColor={COLORS.textLight}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number</Text>
                        <View style={styles.phoneInputContainer}>
                            <View style={styles.countryCode}>
                                <Text style={styles.flag}>🇳🇬</Text>
                                <Text style={styles.countryCodeText}>▼</Text>
                            </View>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="+234 00000000"
                                placeholderTextColor={COLORS.textLight}
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Enter Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            placeholderTextColor={COLORS.textLight}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor={COLORS.textLight}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Terms Checkbox */}
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAgreedToTerms(!agreedToTerms)}
                    >
                        <View style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}>
                            {agreedToTerms && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.checkboxLabel}>
                            By creating this account, you agree to our{' '}
                            <Text style={styles.linkText}>Terms of Service</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login Buttons */}
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonIcon}>🍎</Text>
                        <Text style={styles.socialButtonText}>Continue with Apple</Text>
                    </TouchableOpacity>

                    {/* Login Link */}
                    <View style={styles.loginLinkContainer}>
                        <Text style={styles.loginLinkText}>Already Have An Account? </Text>
                        <TouchableOpacity onPress={onNavigateToLogin}>
                            <Text style={styles.loginLink}>Log In</Text>
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
    input: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.m - 2,
        fontSize: FONT_SIZE.m,
        backgroundColor: '#F5F5F7',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        gap: SPACING.s,
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        backgroundColor: '#F5F5F7',
        gap: SPACING.xs,
    },
    flag: {
        fontSize: 20,
    },
    countryCodeText: {
        fontSize: 12,
        color: COLORS.text,
    },
    phoneInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingHorizontal: SPACING.m,
        fontSize: FONT_SIZE.m,
        backgroundColor: '#F5F5F7',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: SPACING.s,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 4,
        marginRight: SPACING.s,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: COLORS.primary,
    },
    checkmark: {
        color: COLORS.secondary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkboxLabel: {
        flex: 1,
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
        lineHeight: 20,
    },
    linkText: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    signUpButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        paddingVertical: SPACING.m,
        alignItems: 'center',
        marginTop: SPACING.s,
    },
    signUpButtonText: {
        color: COLORS.secondary,
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SPACING.m,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E5EA',
    },
    dividerText: {
        marginHorizontal: SPACING.m,
        color: COLORS.textLight,
        fontSize: FONT_SIZE.s,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 8,
        paddingVertical: SPACING.m - 2,
        backgroundColor: COLORS.background,
    },
    socialButtonIcon: {
        fontSize: 20,
        marginRight: SPACING.s,
    },
    socialButtonText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
        fontWeight: '500',
    },
    loginLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SPACING.s,
    },
    loginLinkText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    loginLink: {
        fontSize: FONT_SIZE.m,
        color: COLORS.primary,
        fontWeight: '600',
    },
});
