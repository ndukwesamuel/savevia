import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

interface LoginScreenProps {
    onLogin: () => void;
    onNavigateToSignUp: () => void;
    onForgotPassword: () => void;
    onBack?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onNavigateToSignUp, onForgotPassword, onBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Log Into Your Account</Text>

                {/* Form */}
                <View style={styles.form}>
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

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="••••••••"
                            placeholderTextColor={COLORS.textLight}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Remember Me & Forgot Password */}
                    <View style={styles.optionsRow}>
                        <TouchableOpacity
                            style={styles.checkboxContainer}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.checkboxLabel}>Remember me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onForgotPassword}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Log In Button */}
                    <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login Buttons */}
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonIcon}>🍎</Text>
                        <Text style={styles.socialButtonText}>Sign in with Apple</Text>
                    </TouchableOpacity>

                    {/* Sign Up Link */}
                    <View style={styles.signUpLinkContainer}>
                        <Text style={styles.signUpLinkText}>Don't Have An Account? </Text>
                        <TouchableOpacity onPress={onNavigateToSignUp}>
                            <Text style={styles.signUpLink}>Sign Up</Text>
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
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.xs,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
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
        fontSize: 12,
        fontWeight: 'bold',
    },
    checkboxLabel: {
        fontSize: FONT_SIZE.s,
        color: COLORS.text,
    },
    forgotPassword: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
    },
    loginButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        paddingVertical: SPACING.m,
        alignItems: 'center',
        marginTop: SPACING.s,
    },
    loginButtonText: {
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
    signUpLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SPACING.s,
    },
    signUpLinkText: {
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    signUpLink: {
        fontSize: FONT_SIZE.m,
        color: COLORS.primary,
        fontWeight: '600',
    },
});
